import Link from "next/link";

export default function UdhetimiNukUGjet() {
  return (
    <main>
      <h1>Udhëtimi nuk u gjet</h1>
      <p>Kjo adresë nuk përputhet me një udhëtim në listë.</p>
      <Link className="action" href="/">Kthehu te lista</Link>
    </main>
  );
}