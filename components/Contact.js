"use client";

import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Contact() {
  const { t } = useApp();

  const whatsappLink = `https://wa.me/212656518255?text=${encodeURIComponent(
    "Bonjour 👋, j'ai une question sur vos produits."
  )}`;

  return (
    <section
      id="contact"
      className="relative py-32 bg-linear-to-br from-orange-600 via-orange-500 to-orange-600 dark:from-orange-700 dark:via-orange-600 dark:to-orange-700 overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Sparkle icon */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Title with text animation */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
          {t.contact.title}
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg">
          {t.contact.description}
        </p>

        {/* CTA Button with premium styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-white/50 transition-all duration-500 transform hover:scale-110"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-linear-to-r from-green-400 to-green-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

            {/* Content */}
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-500">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="group-hover:text-white transition-colors duration-500">
                {t.contact.whatsapp}
              </span>
              <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500 opacity-0 group-hover:opacity-100 group-hover:text-white" />
            </div>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm">Support disponible</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-sm">Clients satisfaits</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">48h</div>
            <div className="text-sm">Livraison rapide</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(0.95);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
