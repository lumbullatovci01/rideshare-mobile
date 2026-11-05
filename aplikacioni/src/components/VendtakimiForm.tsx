"use client";

import { useState } from "react";

type Gjendja =
  | "idle"
  | "loading"
  | "success"
  | "denied"
  | "timeout"
  | "unavailable";

export default function VendtakimiForm() {
  const [teksti, setTeksti] = useState("");
  const [vendtakimi, setVendtakimi] = useState("");
  const [gabimi, setGabimi] = useState("");
  const [gjendja, setGjendja] = useState<Gjendja>("idle");
  const [mesazhi, setMesazhi] = useState("");
  const [saktesia, setSaktesia] = useState("");

  function konfirmo() {
    const cleaned = teksti.trim();
    if (!cleaned) {
      setGabimi("Shkruaj vendtakimin.");
      return;
    }
    setGabimi("");
    setVendtakimi(cleaned);
  }

  function kurMerretPozicioni(position: GeolocationPosition) {
    setGjendja("success");
    setMesazhi("Pozicioni u mor");
    setSaktesia(`Saktesia rreth ${Math.round(position.coords.accuracy)} m`);
  }

  function kurDeshtonLeximi(error: { code: number }) {
    setSaktesia("");
    if (error.code === 1) {
      setGjendja("denied");
      setMesazhi("Leja u refuzua. Shkruaj vendtakimin vete.");
    } else if (error.code === 3) {
      setGjendja("timeout");
      setMesazhi("Koha mbaroi. Provo serish ose shkruaj vendtakimin vete.");
    } else {
      setGjendja("unavailable");
      setMesazhi("Pozicioni nuk eshte i disponueshem. Shkruaj vendtakimin vete.");
    }
  }

  function perdorVendndodhjen() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGjendja("unavailable");
      setMesazhi("Ky telefon nuk e mbeshtet vendndodhjen. Shkruaj vendtakimin vete.");
      setSaktesia("");
      return;
    }
    setGjendja("loading");
    setMesazhi("Po kerkojme vendndodhjen...");
    setSaktesia("");
    navigator.geolocation.getCurrentPosition(
      kurMerretPozicioni,
      kurDeshtonLeximi,
      { timeout: 10000 }
    );
  }

  return (
    <section>
      <div>
        <label htmlFor="meeting-input">Shkruaj vendtakimin</label>
      </div>
      <input
        id="meeting-input"
        data-testid="meeting-input"
        value={teksti}
        onChange={(e) => setTeksti(e.target.value)}
      />
      <button
        type="button"
        className="action"
        data-testid="confirm-meeting"
        onClick={konfirmo}
      >
        Konfirmo ne telefon
      </button>
      <p role="alert" data-testid="meeting-error">{gabimi}</p>
      <p>
        Vendtakimi i konfirmuar:{" "}
        <strong data-testid="confirmed-meeting">{vendtakimi}</strong>
      </p>

      <button
        type="button"
        className="action"
        data-testid="locate-me"
        onClick={perdorVendndodhjen}
        disabled={gjendja === "loading"}
      >
        Perdor vendndodhjen time
      </button>
      
      <p data-testid="location-status" data-state={gjendja}>{mesazhi}</p>
      <p data-testid="location-accuracy">{saktesia}</p>
    </section>
  );
}