"use client";

import React, { useState, createContext, useContext } from "react";
import { translations } from "@/lib/translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const [theme, setTheme] = useState("light");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const t = translations[lang];

  const toggleLang = () => setLang(lang === "fr" ? "ar" : "fr");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme,
        toggleLang,
        t,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <div
        className={theme === "dark" ? "dark" : ""}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
