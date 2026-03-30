import { products } from "@/src/data/products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6"> Pizza Menu</h1>
        <div className="flex justify-center mb-8">
          <Image
            src="/image/pizza.webp"
            alt="pizza"
            width={720}
            height={480}
            className="mx-auto w-full max-w-[720px] rounded-2xl object-cover"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>

              <p className="text-sm text-gray-500 mt-1 mb-3">
                {product.description}
              </p>

              {/* Price */}
              <p className="text-base font-medium mb-4">
                {product.type === "pizza"
                  ? `From $${product.basePrice.small}`
                  : `$${product.price}`}
              </p>

              {/* Button */}
              <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
