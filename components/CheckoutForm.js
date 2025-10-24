"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function CheckoutForm({ product }) {
  const { t, lang } = useApp();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    size: "M",
    color: "black",
    quantity: 1,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = t.checkout.validation.required;
    if (!formData.phone.trim())
      newErrors.phone = t.checkout.validation.required;
    if (!/^[0-9+\s-()]+$/.test(formData.phone))
      newErrors.phone = t.checkout.validation.phone;
    if (!formData.address.trim())
      newErrors.address = t.checkout.validation.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const total = product.price * formData.quantity;
    const message = `Bonjour 👋, je veux commander le produit *${
      product.name[lang]
    }*

📦 *Détails du produit:*
- Taille: ${formData.size}
- Couleur: ${
      formData.color === "black"
        ? lang === "fr"
          ? "Noir"
          : "أسود"
        : lang === "fr"
        ? "Blanc"
        : "أبيض"
    }
- Quantité: ${formData.quantity}
- Prix total: ${total} DH

👤 *Informations client:*
- Nom: ${formData.fullName}
- Téléphone: ${formData.phone}
- Adresse: ${formData.address}

Merci 🙏`;

    const whatsappLink = `https://wa.me/212656518255?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const total = product.price * formData.quantity;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t.checkout.summary}
        </h2>
        <div className="flex gap-4 mb-6">
          <img
            src={product.image}
            alt={product.name[lang]}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {product.name[lang]}
            </h3>
            <p className="text-2xl font-bold text-orange-500">
              {product.price} DH
            </p>
            {product.selectedDesign && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Design: {product.selectedDesign.preview}{" "}
                {product.selectedDesign.name}
              </p>
            )}
            {product.uploadedImage && (
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                ✓ Design personnalisé importé
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.checkout.form.fullName}
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.checkout.form.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+212 6XX XXX XXX"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.checkout.form.address}
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.checkout.form.size}
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.checkout.form.color}
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="black">{t.products.black}</option>
                <option value="white">{t.products.white}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t.checkout.form.quantity}
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              max="10"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                {t.checkout.form.total}:
              </span>
              <span className="text-3xl font-bold text-orange-500">
                {total} DH
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              {t.checkout.form.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
