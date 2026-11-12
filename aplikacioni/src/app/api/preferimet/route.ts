import { aEKaPreferuar, ruajPreferim } from "@/lib/preferimet";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const udhetimId = searchParams.get("udhetimId");

  if (!udhetimId) {
    return Response.json(
      { error: "Mungon ID-ja e udhëtimit." },
      { status: 400 }
    );
  }

  try {
    const favorite = await aEKaPreferuar(udhetimId);
    return Response.json({ favorite });
  } catch {
    return Response.json(
      { error: "Preferimi nuk mund të lexohet." },
      { status: 503 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const udhetimId = String(body.udhetimId ?? "");

    const rezultati = await ruajPreferim(udhetimId);

    if (rezultati === "hyr") {
      return Response.json(
        { error: "Duhet të hysh me GitHub." },
        { status: 401 }
      );
    }

    if (rezultati === "gabim") {
      return Response.json(
        { error: "Preferimi nuk u ruajt." },
        { status: 400 }
      );
    }

    return Response.json({ favorite: true });
  } catch {
    return Response.json(
      { error: "Preferimi nuk u ruajt." },
      { status: 503 }
    );
  }
}