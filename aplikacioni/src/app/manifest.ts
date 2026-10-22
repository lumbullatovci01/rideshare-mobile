import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RideShare AAB", short_name: "RideShare",
    description: "Udhëtime drejt AAB; listë publike për lexim offline.",
    start_url: "/", scope: "/", display: "standalone",
    background_color: "#0b101b", theme_color: "#be3455",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}