"use client";

import BaseModal from "@/src/components/Modal/BaseModal";
import Cart from "@/src/components/Cart";
import { CartItem } from "@/src/types/cart";

type CartModalProps = {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onIncreaseQuantity: (id: string) => void;
  onDecreaseQuantity: (id: string) => void;
};

export default function CartModal({
  isOpen,
  items,
  onClose,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CartModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} className="w-full max-w-2xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>

          <button
            type="button"
            onClick={onClose}
            className="border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50 transition cursor-pointer"
          >
            Close
          </button>
        </div>

        <Cart
          items={items}
          onRemove={onRemove}
          onIncreaseQuantity={onIncreaseQuantity}
          onDecreaseQuantity={onDecreaseQuantity}
        />
      </div>
    </BaseModal>
  );
}
