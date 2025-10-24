"use client";

import { Instagram, Facebook } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M²</span>
            </div>
            <span className="text-2xl font-bold">MSquare</span>
          </div>

          <div className="text-center">
            <p className="text-gray-400">© 2025 MSquare. {t.footer.rights}.</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">{t.footer.followUs}:</span>
            <a href="#" className="hover:text-orange-500 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
