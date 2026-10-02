"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  //GET data dari API
  useEffect(() => {
    fetch("/api/favorites")
      .then((res) => res.json())
      .then(setFavorites)
      .catch(() => setFavorites([]));
  }, []);

  const addFavorite = async (user) => {
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const saved = await res.json();
      setFavorites((prev) => [...prev, saved.data ?? saved]);
    }
  };

  const updateFavorite = async (id, note) => {
    const res = await fetch(`/api/favorites/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });

    if (res.ok) {
      const data = await res.json();
      const updatedFavorite = data.data ?? { note };

      setFavorites((prev) =>
        prev.map((fav) =>
          String(fav.id) === String(id) ? { ...fav, ...updatedFavorite } : fav
        )
      );
    }
  };

  const removeFavorite = async (userId) => {
    const res = await fetch(`/api/favorites/${userId}`, { method: "DELETE" });

    if (res.ok) {
      setFavorites((prev) =>
        prev.filter((fav) => String(fav.id) !== String(userId))
      );
    }
  };

  const isFavorite = (userId) =>
    favorites.some((f) => String(f.id) === String(userId));

  const value = { favorites, addFavorite, updateFavorite, removeFavorite, isFavorite };

  return (
    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error("useFavorite harus dipakai di dalam <FavoriteProvider>");
  }

  return context;
}