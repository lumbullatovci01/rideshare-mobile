// Kjo cache përmban VETËM dokumentin offline, ikonat dhe listën publike.
const CACHE = "rideshare-public-v1";
const API = "/api/udhetimet";
const SHELL = ["/offline.html", "/icons/icon-192.png", "/icons/icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL))
    .then(() => self.skipWaiting()));
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith("rideshare-public-") && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

async function readPublicList(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
      throw new Error("Lista nuk erdhi nga serveri");
    }
    const headers = new Headers(response.headers);
    headers.set("x-rideshare-source", "network");
    headers.set("x-rideshare-saved-at", new Date().toISOString());
    const fresh = new Response(await response.text(), { status: 200, headers });
    // Nëse hapësira lokale është plot, lista nga serveri prapë shfaqet.
    try { await cache.put(API, fresh.clone()); } catch {
      // Mos pretendo ruajtje kur pajisja nuk e pranoi kopjen.
      fresh.headers.delete("x-rideshare-saved-at");
    }
    return fresh;
  } catch {
    const saved = await cache.match(API);
    if (!saved) return new Response(JSON.stringify({ error: "no_snapshot" }), {
      status: 503, headers: { "content-type": "application/json" },
    });
    const headers = new Headers(saved.headers);
    headers.set("x-rideshare-source", "cache");
    return new Response(await saved.text(), { status: 200, headers });
  }
}

self.addEventListener("fetch", event => {
  const request = event.request, url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname === API && !url.search) {
    event.respondWith(readPublicList(request));
  } else if (request.mode === "navigate" && ["/", "/offline.html"].includes(url.pathname)) {
    event.respondWith(fetch(request).catch(async () => {
      const saved = await caches.match("/offline.html");
      return saved || new Response("Hape RideShare një herë me internet.", { status: 503 });
    }));
  }
  // /panel, /api/auth, POST dhe faqet private nuk ruhen dhe nuk ridërgohen.
});
