"use client";

import { Sun, Moon, Menu, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, lang, toggleLang, theme, toggleTheme } = useApp();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "products", label: t.nav.products },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-orange-500/5"
            : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-orange-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Image
                  src={logo}
                  alt="MSquare Logo"
                  width={48}
                  height={48}
                  className="relative rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  priority
                />
              </div>
              <span className="text-2xl md:text-3xl font-black bg-linear-to-r from-gray-900 via-orange-600 to-gray-900 dark:from-white dark:via-orange-400 dark:to-white bg-clip-text text-transparent">
                MSquare
              </span>
            </Link>

            {/* Desktop Navigation */}
            {isHome && (
              <nav className="hidden lg:flex items-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-6 py-2 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 rounded-xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                  </button>
                ))}
              </nav>
            )}

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300 transform group-hover:rotate-12 transition-transform" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400 transform group-hover:rotate-90 transition-transform" />
                )}
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="relative px-5 py-3 rounded-xl bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">
                  {lang === "fr" ? "عربي" : "FR"}
                </span>
              </button>

              {/* Mobile menu button */}
              {isHome && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-all"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-300"
            style={{
              width: isScrolled ? "100%" : "0%",
              transition: "width 0.3s ease-out",
            }}
          ></div>
        </div>
      </header>

      {/* Mobile menu */}
      {isHome && (
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Menu panel */}
          <div
            className={`absolute top-20 right-4 left-4 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
              mobileMenuOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-4 scale-95"
            }`}
          >
            <nav className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-4 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-500 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    animation: mobileMenuOpen
                      ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
