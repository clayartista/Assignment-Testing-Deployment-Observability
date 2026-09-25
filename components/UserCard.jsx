import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FavoriteContext } from "@/context/FavoriteContext";
import { useContext } from "react";

export default function UserCard({ user }) {
  // Ambil state dan fungsi dari Context
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  // Cek apakah user ini ada di daftar favorit
  const isFavorite = favorites.some((fav) => fav.id === user.id);

  return (
    <div className="rounded-xl border border-gray-800 bg-transparent p-4 text-white">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-sm font-bold">
          {user.name.substring(0, 2).toUpperCase()}
        </div>
        <h3 className="font-semibold">{user.name}</h3>
      </div>
      <div className="mb-6 text-sm text-gray-400">
        <p>{user.email}</p>
        <p>{user.company?.name}</p>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-black hover:bg-gray-300">
          View Profile
        </button>
        {/* Tombol Toggle Favorite */}
        <button
          onClick={() => toggleFavorite(user)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            isFavorite
              ? "border-white bg-blue-300 text-black"
              : "border-gray-600 text-white hover:bg-gray-800"
          }`}
        >
          {isFavorite ? "♥ Favourite" : "♡ Add Favourite"}
        </button>
      </div>
    </div>
  );
}