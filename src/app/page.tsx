"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/src/components/ProductCard";
import ProductModal from "@/src/components/Modal/ProductModal";
import CartModal from "@/src/components/Modal/CartModal";
import { useProducts } from "@/src/hooks/useProducts";
import { Product } from "@/src/types/product";
import { CartItem } from "@/src/types/cart";

export default function Home() {
  const { products, loading, error } = useProducts();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((cartItem) => {
        const sameProduct = cartItem.product.id === item.product.id;
        const sameSize = cartItem.selectedSize === item.selectedSize;
        const sameDrink = cartItem.selectedDrink === item.selectedDrink;

        const currentIngredients = [
          ...(cartItem.selectedIngredients ?? []),
        ].sort();
        const newIngredients = [...(item.selectedIngredients ?? [])].sort();

        const sameIngredients =
          currentIngredients.length === newIngredients.length &&
          currentIngredients.every(
            (ingredient, index) => ingredient === newIngredients[index],
          );

        return sameProduct && sameSize && sameDrink && sameIngredients;
      });

      if (existingIndex === -1) {
        return [...prev, item];
      }

      return prev.map((cartItem, index) =>
        index === existingIndex
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
              totalPrice:
                (cartItem.quantity + item.quantity) * cartItem.unitPrice,
            }
          : cartItem,
      );
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const newQuantity = item.quantity + 1;

        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * item.unitPrice,
        };
      }),
    );
  };

  const handleDecreaseQuantity = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          const newQuantity = item.quantity - 1;

          return {
            ...item,
            quantity: newQuantity,
            totalPrice: newQuantity * item.unitPrice,
          };
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const totalCartQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Pizza Menu</h1>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm text-left cursor-pointer hover:bg-white transition"
          >
            <p className="text-sm text-gray-500">Cart</p>
            <p className="text-lg font-bold">{totalCartQuantity} items</p>
          </button>
        </div>

        <Image
          src="/images/pizza.webp"
          alt="Pizza"
          width={720}
          height={480}
          className="mx-auto rounded-2xl mb-8"
        />

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}

        {selectedProduct && (
          <ProductModal
            key={selectedProduct.id}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}

        <CartModal
          isOpen={isCartOpen}
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      </div>
    </main>
  );
}
