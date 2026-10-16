import "server-only";
import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("Databaza nuk është konfiguruar.");
  return neon(url);
}
