"use client";

import { Check, Sparkles, Shield, Zap, Heart } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function About() {
  const { t } = useApp();

  const iconMap = {
    0: Sparkles,
    1: Shield,
    2: Zap,
    3: Heart,
  };

  return (
    <section
      id="about"
      className="relative py-32 bg-linear-to-br from-gray-50 via-orange-50/30 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 dark:bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/20 dark:bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with gradient text */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm tracking-wide uppercase">
              {t.about.title}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-linear-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white bg-clip-text text-transparent leading-tight">
            {t.about.title}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Description card with glassmorphism */}
          <div className="mb-16 p-8 md:p-12 backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-all duration-500">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed text-center font-light">
              {t.about.description}
            </p>
          </div>

          {/* Features grid with animated cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.features.map((feature, i) => {
              const Icon = iconMap[i] || Check;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                  }}
                >
                  {/* Gradient background that appears on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Card content */}
                  <div className="relative flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-transparent group-hover:border-orange-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/20 group-hover:-translate-y-1">
                    {/* Icon with animated background */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-14 h-14 bg-linear-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <span className="text-gray-800 dark:text-gray-100 group-hover:text-white font-semibold text-lg transition-colors duration-500 flex-1">
                      {feature}
                    </span>

                    {/* Animated check mark */}
                    <Check className="w-6 h-6 text-orange-500 group-hover:text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
