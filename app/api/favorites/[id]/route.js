import { removeFavorite } from "@/lib/services/favoriteService";

export async function DELETE(_request, { params }) {
  const { id } = params;
  const numId = Number(id);
  const result = removeFavorite(numId);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: "Berhasil dihapus" }, { status: result.status });
}