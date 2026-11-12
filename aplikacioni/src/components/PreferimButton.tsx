"use client";

import { useState } from "react";

type Props = {
  udhetimId: string;
  fillimishtPreferuar: boolean;
};

export default function PreferimButton({
  udhetimId,
  fillimishtPreferuar,
}: Props) {
  const [preferuar, setPreferuar] = useState(fillimishtPreferuar);
  const [dukeRuajtur, setDukeRuajtur] = useState(false);
  const [mesazh, setMesazh] = useState("");

  async function ruaj() {
    if (preferuar || dukeRuajtur) return;

    setDukeRuajtur(true);
    setMesazh("");

    try {
      const response = await fetch("/api/preferimet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ udhetimId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Preferimi nuk u ruajt.");
      }

      setPreferuar(true);
      setMesazh("U ruajt te të preferuarat.");
    } catch (error) {
      setMesazh(
        error instanceof Error
          ? error.message
          : "Preferimi nuk u ruajt."
      );
    } finally {
      setDukeRuajtur(false);
    }
  }

  return (
    <section>
      <button
        type="button"
        className="action"
        onClick={ruaj}
        disabled={preferuar || dukeRuajtur}
      >
        {preferuar ? "★ I ruajtur" : dukeRuajtur ? "★ Po ruhet..." : "☆ Ruaj udhëtimin"}
      </button>

      <p aria-live="polite">
        {mesazh || (preferuar ? "Ky udhëtim është te të preferuarat." : "Nuk është te të preferuarat.")}
      </p>
    </section>
  );
}