import Link from "next/link";
import VendtakimiForm from "@/components/VendtakimiForm";

// Te dhena lokale per udhetimin e Dritonit. Pa login, pa Neon.
const udhetim = {
  nisja: "Prizren",
  destinacioni: "AAB",
  ora: "10:00",
  vendtakimi: "Para hyrjes kryesore",
  vende: 1,
};

export default function Java08Test() {
  return (
    <main>
      <Link href="/">← Kthehu te lista</Link>
      <h1>{udhetim.nisja} → {udhetim.destinacioni}</h1>
      <p>Ora: {udhetim.ora}</p>
      <p>Vendtakimi: {udhetim.vendtakimi}</p>
      <p>Vende te lira: {udhetim.vende}</p>
      <VendtakimiForm />
    </main>
  );
}