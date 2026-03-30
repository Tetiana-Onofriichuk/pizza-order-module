"use client";

import Image from "next/image";
import { useState } from "react";
import { products, Product } from "@/src/data/products";
import { CartItem } from "@/src/types/cart";
import ProductCard from "@/src/components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Pizza Menu</h1>

        <p className="mb-4 text-lg font-medium">
          Cart items: {cartItems.length}
        </p>

        <div className="relative mx-auto mb-8 w-full max-w-[720px] aspect-[3/2]">
          <Image
            src="/images/pizza.webp"
            alt="Pizza"
            fill
            priority
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        key={selectedProduct?.id ?? "empty"}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}
