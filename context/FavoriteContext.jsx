"use client";
import { createContext, useState } from "react";

// Membuat Context
export const FavoriteContext = createContext();

// Membuat Provider & State Global
export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Fungsi behavior tombol (Add/Remove)
  const toggleFavorite = (user) => {
    setFavorites((prevFavorites) => {
      // Cek apakah user sudah ada di dalam state favorites
      const isExist = prevFavorites.find((fav) => fav.id === user.id);
      
      if (isExist) {
        // Jika sudah ada, hapus dari favorit (Remove)
        return prevFavorites.filter((fav) => fav.id !== user.id);
      } else {
        // Jika belum ada, tambahkan ke favorit (Add)
        return [...prevFavorites, user];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}