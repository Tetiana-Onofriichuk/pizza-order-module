export type PizzaSize = "small" | "medium" | "large";

export type Ingredient = {
  id: string;
  name: string;
  price: number;
};

export type PizzaProduct = {
  id: number;
  type: "pizza";
  name: string;
  description: string;
  basePrice: Record<PizzaSize, number>;
  sizes: PizzaSize[];
  ingredients: Ingredient[];
};

export type MenuProduct = {
  id: number;
  type: "menu";
  name: string;
  description: string;
  price: number;
  requiredOptions: {
    drink: { id: string; name: string }[];
  };
};

export type SimpleProduct = {
  id: number;
  type: "drink" | "dessert";
  name: string;
  description: string;
  price: number;
};

export type Product = PizzaProduct | MenuProduct | SimpleProduct;
