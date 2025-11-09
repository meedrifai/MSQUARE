"use client";

import React, { useState, createContext, useContext, useEffect } from "react";
import { translations } from "@/lib/translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Initialize with stored values or defaults
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("lang") || "fr";
    }
    return "fr";
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const t = translations[lang];

  const toggleLang = () => setLang((prev) => (prev === "fr" ? "ar" : "fr"));
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  // Sync changes to DOM and localStorage
  useEffect(() => {
    const html = document.documentElement;

    // Update dark class
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Update text direction
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Save preferences
    try {
      localStorage.setItem("theme", theme);
      localStorage.setItem("lang", lang);
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
  }, [theme, lang]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        setTheme,
        toggleTheme,
        toggleLang,
        t,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
