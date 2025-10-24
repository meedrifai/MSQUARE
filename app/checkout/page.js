"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Header from "@/components/Header";
import CheckoutForm from "@/components/CheckoutForm";
import WhatsAppButton from "@/components/WhatsAppButton";

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

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => router.push("/")}
            className="mb-6 text-orange-500 hover:text-orange-600 flex items-center gap-2"
          >
            ← {lang === "fr" ? "Retour" : "رجوع"}
          </button>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t.checkout.title}
          </h1>

          <CheckoutForm product={selectedProduct} />
        </div>
      </div>
      <WhatsAppButton />
    </>
  );
}
