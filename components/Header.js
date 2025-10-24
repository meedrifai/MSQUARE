"use client";

import { Sun, Moon } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M²</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              MSquare
            </span>
          </Link>

          {isHome && (
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition"
              >
                {t.nav.contact}
              </button>
            </nav>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition font-medium"
            >
              {lang === "fr" ? "عربي" : "FR"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
