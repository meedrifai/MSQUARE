"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Header from "@/components/Header";
import CheckoutForm from "@/components/CheckoutForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, ShoppingBag, Lock, Truck, Shield } from "lucide-react";

export default function CheckoutPage() {
  const { t, lang, selectedProduct } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!selectedProduct) {
      router.push("/");
    }
  }, [selectedProduct, router]);

  if (!selectedProduct) {
    return null;
  }

  const trustBadges = [
    { icon: Lock, text: lang === "fr" ? "Paiement sécurisé" : "دفع آمن" },
    { icon: Truck, text: lang === "fr" ? "Livraison rapide" : "توصيل سريع" },
    { icon: Shield, text: lang === "fr" ? "Garantie qualité" : "ضمان الجودة" },
  ];

  return (
    <>
      <Header />

      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/20 dark:bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back button with premium styling */}
          <button
            onClick={() => router.push("/")}
            className="group mb-8 inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-x-1 border border-gray-200 dark:border-gray-700"
          >
            <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <ArrowLeft className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
            </div>
            <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors">
              {lang === "fr" ? "Retour aux produits" : "العودة إلى المنتجات"}
            </span>
          </button>

          {/* Page header with gradient */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <ShoppingBag className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm uppercase tracking-wide">
                {lang === "fr" ? "Finaliser la commande" : "إتمام الطلب"}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white bg-clip-text text-transparent">
              {t.checkout.title}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {lang === "fr"
                ? "Plus qu'une étape pour recevoir votre produit personnalisé"
                : "خطوة واحدة فقط لاستلام منتجك المخصص"}
            </p>
          </div>

          {/* Trust badges */}
          <div className="mb-12 flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="w-10 h-10 bg-linear-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              {/* Progress line */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full -z-10">
                <div className="h-full bg-linear-to-r from-orange-400 to-orange-600 rounded-full w-1/2 transition-all duration-1000"></div>
              </div>

              {/* Steps */}
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-orange-500">
                <div className="w-6 h-6 bg-linear-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {lang === "fr" ? "Informations" : "المعلومات"}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-600">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {lang === "fr" ? "Confirmation" : "التأكيد"}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-600">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  {lang === "fr" ? "Livraison" : "التوصيل"}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout form */}
          <div className="animate-fade-in-up">
            <CheckoutForm product={selectedProduct} />
          </div>

          {/* Security notice */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {lang === "fr"
                    ? "Vos informations sont sécurisées"
                    : "معلوماتك آمنة"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {lang === "fr"
                    ? "Nous respectons votre vie privée et ne partageons jamais vos données personnelles. Votre commande sera traitée de manière confidentielle et sécurisée via WhatsApp."
                    : "نحن نحترم خصوصيتك ولا نشارك بياناتك الشخصية أبدًا. سيتم معالجة طلبك بسرية وأمان عبر WhatsApp."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
}
