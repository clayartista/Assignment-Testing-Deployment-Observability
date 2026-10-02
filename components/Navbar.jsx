"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useFavorite } from "@/context/FavoriteContext";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { name, submitted } = useUser();
  // Hitung jumlah favorit untuk ditampilkan di Navbar
  const { favorites } = useFavorite();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-4xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link href="/" className="shrink-0 text-sm font-bold tracking-tight">
          MyWebsite
        </Link>

        <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-full px-3 py-1.5 hover:text-foreground">
              {link.label}
            </Link>
          ))}

          <Link href="/favorites" className="rounded-full bg-gray-800 px-4 py-1 text-white hover:bg-gray-700">
            Favorite ({favorites.length})
          </Link>
        </div>

        {submitted && <span>Hi, {name} 👋</span>}
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
