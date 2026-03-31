"use client";

import { useState } from "react";
import { Product, PizzaSize } from "@/src/types/product";
import { CartItem } from "@/src/types/cart";
import { calculatePizzaPrice } from "@/src/utils/price";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
};

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: ProductModalProps) {
  const initialSize = product?.type === "pizza" ? product.sizes[0] : undefined;

  const [selectedSize, setSelectedSize] = useState<PizzaSize | undefined>(
    initialSize,
  );
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedDrink, setSelectedDrink] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return null;
  }

  const toggleIngredient = (ingredientId: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredientId)
        ? prev.filter((id) => id !== ingredientId)
        : [...prev, ingredientId],
    );
  };

  const unitPrice =
    product.type === "pizza"
      ? calculatePizzaPrice(
          product,
          selectedSize ?? product.sizes[0],
          selectedIngredients,
        )
      : product.price;

  const totalPrice = unitPrice * quantity;
  const isAddToCartDisabled = product.type === "menu" && !selectedDrink;

  const handleAddToCart = () => {
    if (isAddToCartDisabled) {
      return;
    }

    const cartItem: CartItem = {
      id: crypto.randomUUID(),
      product,
      quantity,
      selectedSize,
      selectedIngredients,
      selectedDrink: selectedDrink || undefined,
      unitPrice,
      totalPrice,
    };

    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        <p className="text-sm text-gray-500 mb-5">{product.description}</p>

        {product.type === "pizza" && (
          <>
            <div className="mb-5">
              <p className="font-medium mb-2">Choose size</p>

              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border cursor-pointer transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="font-medium mb-2">Extra ingredients</p>

              <div className="space-y-2">
                {product.ingredients.map((ingredient) => (
                  <label
                    key={ingredient.id}
                    className="flex items-center justify-between border rounded-xl px-3 py-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedIngredients.includes(ingredient.id)}
                        onChange={() => toggleIngredient(ingredient.id)}
                      />
                      <span>{ingredient.name}</span>
                    </div>

                    <span className="text-sm text-gray-600">
                      +${ingredient.price.toFixed(2)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {product.type === "menu" && (
          <div className="mb-5">
            <p className="font-medium mb-2">Choose drink</p>

            <div className="space-y-2">
              {product.requiredOptions.drink.map((drink) => (
                <label
                  key={drink.id}
                  className="flex items-center gap-2 border rounded-xl px-3 py-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="drink"
                    value={drink.id}
                    checked={selectedDrink === drink.id}
                    onChange={() => setSelectedDrink(drink.id)}
                  />
                  <span>{drink.name}</span>
                </label>
              ))}

              {!selectedDrink && (
                <p className="text-sm text-red-500 mt-2">
                  Please select a drink
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mb-5">
          <p className="font-medium mb-2">Quantity</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="w-10 h-10 rounded-xl border border-gray-300 cursor-pointer"
            >
              -
            </button>

            <span className="font-semibold w-6 text-center">{quantity}</span>

            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-10 h-10 rounded-xl border border-gray-300 cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <span className="text-lg font-medium">Total</span>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full border border-gray-300 py-3 rounded-xl cursor-pointer"
          >
            Close
          </button>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAddToCartDisabled}
            className={`w-full py-3 rounded-xl transition ${
              isAddToCartDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white cursor-pointer hover:bg-gray-800"
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
