import { Product, PizzaSize } from "@/src/types/product";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: PizzaSize;
  selectedIngredients?: string[];
  selectedDrink?: string;
  unitPrice: number;
  totalPrice: number;
};
