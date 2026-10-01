export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
};

export const udhetimet: Udhetim[] = [
  { id: "1", nisja: "Prishtinë", destinacioni: "AAB", ora: "08:00",
    vendtakimi: "Stacioni i autobusëve", vende: 2 },
  { id: "2", nisja: "Fushë Kosovë", destinacioni: "AAB", ora: "08:15",
    vendtakimi: "Te stacioni kryesor", vende: 1 },
  { id: "3", nisja: "Lipjan", destinacioni: "AAB", ora: "07:45",
    vendtakimi: "Qendra e qytetit", vende: 0 },
];

export function gjejUdhetimin(id: string) {
  return udhetimet.find((udhetim) => udhetim.id === id);
}