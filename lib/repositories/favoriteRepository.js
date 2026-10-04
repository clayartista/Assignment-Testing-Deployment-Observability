import { favorites } from "@/lib/db";

export function findAllFavorites() {
  return favorites;
}

export function findFavoriteById(id) {
  return favorites.find((favorite) => String(favorite.id) === String(id));
}

export function insertFavorite(data) {
  favorites.push(data);
  return data;
}

export function deleteFavoriteById(id) {
  const index = favorites.findIndex(
    (favorite) => String(favorite.id) === String(id)
  );

  if (index === -1) return false;

  favorites.splice(index, 1);
  return true;
}