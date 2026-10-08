"use client";
import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <section className="relative min-h-screen">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold text-primary">Favorite</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          My Favorite Users
        </h1>
        <p className="mt-4 mb-8 text-muted-foreground">
          Data ini diambil langsung dari FavouriteContext.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <UserCard
                key={favorite.id}
                user={{
                  id: favorite.app_users.id,
                  name: favorite.app_users.name,
                  email: favorite.app_users.email,
                  company: { name: favorite.app_users.company_name }
                }}
              />
            ))
          ) : (
            <p className="text-gray-500">Anda belum memiliki user favorit.</p>
          )}
        </div>
      </div>
    </section>
  );
}