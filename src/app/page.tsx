"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/src/components/ProductCard";
import ProductModal from "@/src/components/ProductModal";
import { useProducts } from "@/src/hooks/useProducts";
import { Product } from "@/src/types/product";
import { CartItem } from "@/src/types/cart";

export default function Home() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (item: CartItem) => {
    console.log("Product added:", item);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Pizza Menu</h1>

        <Image
          src="/images/pizza.webp"
          alt="Pizza"
          width={720}
          height={480}
          className="mx-auto rounded-2xl mb-8"
        />

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </main>
  );
}
