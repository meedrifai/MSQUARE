"use client";

import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            {t.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          <button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-orange-500 text-white rounded-full text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition shadow-lg"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
