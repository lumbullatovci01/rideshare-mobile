import "server-only";
import { getSql } from "./db";

export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
};

export async function lexoUdhetimet(): Promise<Udhetim[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet ORDER BY id
  `;
  return rows as Udhetim[];
}

export async function gjejUdhetimin(id: string): Promise<Udhetim | undefined> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende
    FROM udhetimet WHERE id = ${id}
  `;
  return rows[0] as Udhetim | undefined;
}