"use client";
import { useEffect } from "react";

export default function Pwa() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let cancelled = false;
    // Server rendering nuk mbush cache-n e JSON-it. E kërkojmë një herë këtu.
    async function warmSnapshot() {
      if (cancelled || !navigator.serviceWorker.controller) return;
      try { await fetch("/api/udhetimet", { cache: "no-store" }); } catch { /* offline */ }
    }
    navigator.serviceWorker.addEventListener("controllerchange", warmSnapshot);
    navigator.serviceWorker.register("/sw.js", { scope: "/" })
      .then(() => navigator.serviceWorker.ready).then(warmSnapshot).catch(() => {});
    return () => {
      cancelled = true;
      navigator.serviceWorker.removeEventListener("controllerchange", warmSnapshot);
    };
  }, []);
  return <aside style={{ padding: "1rem" }}>
    <a href="/offline.html">Lista për lexim pa internet</a>
    <p>Kopja e ruajtur mund të jetë e vjetër. Këtu nuk konfirmohen rezervime.</p>
  </aside>;
}