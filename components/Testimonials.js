"use client";

import { Star } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Testimonials() {
  const { t } = useApp();

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
