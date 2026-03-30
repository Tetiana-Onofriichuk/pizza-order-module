import { Product, PizzaSize } from "@/src/data/products";

export type CartItem = {
  id: string;
  productId: number;
  product: Product;
  quantity: number;
  selectedSize: PizzaSize | null;
  selectedIngredients: string[];
  selectedDrink: string;
  unitPrice: number;
  totalPrice: number;
};
