"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { t, lang, setSelectedProduct } = useApp();
  const router = useRouter();
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Handle user uploaded custom design
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target.result);
      reader.readAsDataURL(file);
      setSelectedDesign(null); // clear selected design if user uploads
    }
  };

  // Go to checkout with selected product info
  const handleOrder = () => {
    setSelectedProduct({
      ...product,
      selectedDesign,
      uploadedImage,
    });
    router.push("/checkout");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 relative">
      {/* Product Image */}
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          className="object-cover rounded-t-2xl"
          sizes="100vw"
          priority
        />

        {/* Overlay: selected design image */}
        {selectedDesign && !uploadedImage && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={selectedDesign.preview}
              alt={selectedDesign.name}
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        )}

        {/* Overlay: uploaded custom design */}
        {uploadedImage && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 pointer-events-none">
            <Image
              src={uploadedImage}
              alt="Custom design"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {product.name[lang]}
        </h3>
        <p className="text-3xl font-bold text-orange-500 mb-4">
          {product.price} DH
        </p>

        {/* Design Selector */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {t.products.selectDesign}
          </p>
          <div className="flex gap-2">
            {product.designs.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  setSelectedDesign(design);
                  setUploadedImage(null);
                }}
                className={`p-2 rounded-lg border-2 transition ${
                  selectedDesign?.id === design.id
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-900"
                    : "border-gray-300 dark:border-gray-600 hover:border-orange-300"
                }`}
              >
                <Image
                  src={design.preview}
                  alt={design.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Upload Custom Design */}
        <div className="mb-4">
          <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-orange-500 transition">
            <Upload className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t.products.uploadDesign}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrder}
          className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          {t.products.orderNow}
        </button>
      </div>
    </div>
  );
}
