"use client";

import { Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.about.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t.about.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-gray-800 rounded-lg"
              >
                <Check className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
