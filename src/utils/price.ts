import { PizzaProduct, PizzaSize } from "@/src/types/product";

export const calculatePizzaPrice = (
  product: PizzaProduct,
  size: PizzaSize,
  selectedIngredients: string[],
) => {
  const base = product.basePrice[size];

  const extraIngredientsPrice = product.ingredients
    .filter((i) => selectedIngredients.includes(i.id))
    .reduce((sum, i) => sum + i.price, 0);

  return base + extraIngredientsPrice;
};
