import { Product } from "@/src/types/product";

type ProductCardProps = {
  product: Product;
  onAddToCart: () => void;
};

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  const priceLabel =
    product.type === "pizza"
      ? `From $${product.basePrice.small}`
      : `$${product.price}`;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{product.name}</h2>

      <p className="text-sm text-gray-500 mt-1 mb-3">{product.description}</p>

      <p className="text-base font-medium mb-4">{priceLabel}</p>

      <button
        onClick={onAddToCart}
        className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 active:scale-95 transition cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
}
