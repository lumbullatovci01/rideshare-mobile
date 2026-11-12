import "server-only";
import { getSql } from "./db";
import { profiliIm } from "./lejet";

export async function aEKaPreferuar(
  udhetimId: string
): Promise<boolean> {
  const profili = await profiliIm();

  if (!profili) return false;

  const sql = getSql();
  const rows = await sql`
    SELECT 1
    FROM preferimet
    WHERE github_id = ${profili.id}
      AND udhetim_id = ${udhetimId}
    LIMIT 1
  `;

  return rows.length === 1;
}

export async function ruajPreferim(
  udhetimId: string
): Promise<"hyr" | "ruajtur" | "gabim"> {
  const profili = await profiliIm();

  if (!profili) return "hyr";

  if (!/^[123]$/.test(udhetimId)) {
    return "gabim";
  }

  const sql = getSql();

  const rows = await sql`
    INSERT INTO preferimet (github_id, udhetim_id)
    VALUES (${profili.id}, ${udhetimId})
    ON CONFLICT (github_id, udhetim_id) DO NOTHING
    RETURNING udhetim_id
  `;

  return rows.length === 1 ? "ruajtur" : "gabim";
}