import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin } from "@/lib/udhetimet";
import { profiliIm } from "@/lib/lejet";
import VendtakimiForm from "@/components/VendtakimiForm";
import PreferimButton from "@/components/PreferimButton";
import { aEKaPreferuar } from "@/lib/preferimet";

export const dynamic = "force-dynamic";

export default async function Detajet({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let udhetim;
  let profili;
  let preferuar = false;
  try {
    udhetim = await gjejUdhetimin(id);
    profili = await profiliIm();
    preferuar = await aEKaPreferuar(id);
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <Link href="/">← Kthehu te lista</Link>
      </main>
    );
  }
  if (!udhetim) notFound();

  return (
    <main>
      <Link href="/">← Kthehu te lista</Link>
      <h1>{udhetim.nisja} → {udhetim.destinacioni}</h1>
      <p>Ora: {udhetim.ora}</p>
      <p>Vendtakimi: {udhetim.vendtakimi}</p>
      <p>Vende të lira: {udhetim.vende}</p>
      <p>Roli yt: {profili?.roli ?? "vizitor"}</p>
      <PreferimButton
        udhetimId={udhetim.id}
        fillimishtPreferuar={preferuar}
      />
      <VendtakimiForm />
      {profili?.roli === "shofer" ? (
        <button className="action" disabled>Vetëm lexim</button>
      ) : udhetim.vende > 0 ? (
        <Link className="action" href={`/udhetimi/${id}/kerkesa`}>
          Kërko vend
        </Link>
      ) : (
        <button className="action" disabled>Nuk ka vende të lira</button>
      )}
    </main>
  );
}