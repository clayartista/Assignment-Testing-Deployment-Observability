import { addFavorite, getAllFavorites } from "@/lib/services/favoriteService";

export async function GET() {
  return Response.json(getAllFavorites());
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return Response.json(
      { error: "Format JSON tidak valid" },
      { status: 400 }
    );
  }

  const result = addFavorite(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ data: result.data }, { status: result.status });
}