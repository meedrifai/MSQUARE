"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/212656518255`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition transform hover:scale-110"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
