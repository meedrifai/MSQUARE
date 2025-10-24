"use client";

import { useApp } from "@/context/AppContext";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Products() {
  const { t } = useApp();

  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {t.products.title}
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          {t.products.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
