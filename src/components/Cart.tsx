import { CartItem } from "@/src/types/cart";

type CartProps = {
  items: CartItem[];
  onRemove: (id: string) => void;
};

export default function Cart({ items, onRemove }: CartProps) {
  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const getItemOptionsLabel = (item: CartItem) => {
    const options: string[] = [];

    if (item.selectedSize) {
      options.push(`Size: ${item.selectedSize}`);
    }

    if (item.selectedIngredients && item.selectedIngredients.length > 0) {
      options.push(`Extras: ${item.selectedIngredients.join(", ")}`);
    }

    if (item.selectedDrink) {
      options.push(`Drink: ${item.selectedDrink}`);
    }

    return options.length > 0 ? options.join(" | ") : "No extra options";
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {item.product.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {getItemOptionsLabel(item)}
                    </p>

                    <p className="text-sm mt-2">
                      Unit price: ${item.unitPrice.toFixed(2)}
                    </p>

                    <p className="text-sm">Quantity: {item.quantity}</p>

                    <p className="text-base font-medium mt-2">
                      Position total: ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="border border-red-300 text-red-500 px-3 py-2 rounded-xl hover:bg-red-50 transition cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-5 pt-4 flex items-center justify-between">
            <span className="text-lg font-medium">Total amount</span>
            <span className="text-xl font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}
