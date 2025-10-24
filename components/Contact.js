"use client";

import { MessageCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Contact() {
  const { t } = useApp();

  const whatsappLink = `https://wa.me/212656518255?text=${encodeURIComponent(
    "Bonjour 👋, j'ai une question sur vos produits."
  )}`;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {t.contact.title}
        </h2>
        <p className="text-xl mb-8 opacity-90">{t.contact.description}</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-500 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          {t.contact.whatsapp}
        </a>
      </div>
    </section>
  );
}
