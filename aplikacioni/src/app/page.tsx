import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";

export default function Home() {
  return (
    <main>
      <h1>RideShare · Udhëtimet për AAB</h1>
      <p>Zgjidh një nisje dhe lexo detajet para kërkesës.</p>
      <div className="trip-list">
        {udhetimet.map((udhetim) => (
          <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
        ))}
      </div>
    </main>
  );
}