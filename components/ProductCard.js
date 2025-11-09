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
  const [selectedColor, setSelectedColor] = useState("black");

  // Handle user uploaded custom design
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target.result);
      reader.readAsDataURL(file);
      setSelectedDesign(null);
    }
  };

  // Go to checkout with selected product info
  const handleOrder = () => {
    setSelectedProduct({
      ...product,
      selectedDesign,
      uploadedImage,
      selectedColor,
    });
    router.push("/checkout");
  };

  // Determine which image to show based on color and design
  const getProductImage = () => {
    // If user uploaded custom image, show base product with overlay
    if (uploadedImage) {
      return selectedColor === "black" ? product.image : product.imageWhite;
    }

    // If a design is selected, show the product with that design
    if (selectedDesign) {
      if (selectedColor === "black") {
        return selectedDesign.imageBlack || product.image;
      } else {
        return selectedDesign.imageWhite || product.imageWhite;
      }
    }

    // No design selected, show base product
    return selectedColor === "black" ? product.image : product.imageWhite;
  };

  const productImage = getProductImage();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 relative">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gray-100 dark:bg-gray-700">
        <Image
          src={productImage}
          alt={product.name[lang]}
          fill
          className="object-cover rounded-t-2xl transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />

        {/* Color Selector - Top Right */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button
            onClick={() => setSelectedColor("black")}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === "black"
                ? "border-orange-500 ring-2 ring-orange-300 scale-110"
                : "border-gray-300 hover:border-orange-300"
            }`}
            style={{ backgroundColor: "black" }}
            title="Black"
          ></button>
          <button
            onClick={() => setSelectedColor("white")}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === "white"
                ? "border-orange-500 ring-2 ring-orange-300 scale-110"
                : "border-gray-300 hover:border-orange-300"
            }`}
            style={{ backgroundColor: "white" }}
            title="White"
          ></button>
        </div>

        {/* Only show overlay for custom uploaded images */}
        {uploadedImage && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
            <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
              <Image
                src={uploadedImage}
                alt="Custom design"
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          </div>
        )}

        {/* Badge showing selected design name */}
        {/* {selectedDesign && (
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
            Design: {selectedDesign.name}
          </div>
        )} */}
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
          <div className="flex gap-2 flex-wrap">
            {/* No Design Button */}
            <button
              onClick={() => {
                setSelectedDesign(null);
                setUploadedImage(null);
              }}
              className={`relative w-16 h-16 p-1 rounded-lg border-2 overflow-hidden cursor-pointer flex items-center justify-center text-xs font-medium transition-all ${
                !selectedDesign && !uploadedImage
                  ? "border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                  : "border-gray-300 dark:border-gray-600 hover:border-orange-300 text-gray-600 dark:text-gray-400"
              }`}
            >
              Aucun
            </button>

            {/* Design Options */}
            {product.designs.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  setSelectedDesign(design);
                  setUploadedImage(null);
                }}
                className={`relative w-16 h-16 p-1 rounded-lg border-2 overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                  selectedDesign?.id === design.id
                    ? "border-orange-500 ring-2 ring-orange-300"
                    : "border-gray-300 dark:border-gray-600 hover:border-orange-300"
                }`}
                title={design.name}
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={design.preview}
                    alt={design.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    onError={(e) => {
                      console.error(`Failed to load image: ${design.preview}`);
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Upload Custom Design */}
        <div className="mb-4">
          <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition">
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
          {uploadedImage && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              ✓ Custom design uploaded
            </p>
          )}
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrder}
          className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          {t.products.orderNow}
        </button>
      </div>
    </div>
  );
}
