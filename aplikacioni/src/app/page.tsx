import Link from "next/link";
import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";

// Lexo bazën përsëri në çdo kërkesë për këtë faqe.
export const dynamic = "force-dynamic";

export default async function Home() {
  let udhetimet: Udhetim[];
  try {
    udhetimet = await lexoUdhetimet();
  } catch (e) {
    console.error(e);
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <Link className="action" href="/">Provo përsëri</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>RideShare · Udhëtimet për AAB</h1>
      <p>Burimi: Neon · të dhëna fiktive për ushtrime</p>
      {udhetimet.length === 0 ? (
        <p>Nuk ka udhëtime për momentin.</p>
      ) : (
        <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
          ))}
        </div>
      )}
    </main>
  );
}