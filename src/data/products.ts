import { Product } from "@/src/types/product";

export const products: Product[] = [
  {
    id: 1,
    type: "pizza",
    name: "Margherita",
    description: "Tomato sauce, mozzarella",
    basePrice: {
      small: 8.5,
      medium: 10.5,
      large: 12.5,
    },
    sizes: ["small", "medium", "large"],
    ingredients: [
      { id: "cheese", name: "Extra cheese", price: 1.5 },
      { id: "mushrooms", name: "Mushrooms", price: 1.2 },
      { id: "olives", name: "Olives", price: 1.0 },
    ],
  },
  {
    id: 2,
    type: "pizza",
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, pepperoni",
    basePrice: {
      small: 9.5,
      medium: 11.5,
      large: 13.5,
    },
    sizes: ["small", "medium", "large"],
    ingredients: [
      { id: "cheese", name: "Extra cheese", price: 1.5 },
      { id: "jalapeno", name: "Jalapeno", price: 1.2 },
    ],
  },
  {
    id: 3,
    type: "pizza",
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan, blue cheese",
    basePrice: {
      small: 10,
      medium: 12,
      large: 14,
    },
    sizes: ["small", "medium", "large"],
    ingredients: [
      { id: "cheese", name: "Extra cheese", price: 1.5 },
      { id: "spinach", name: "Spinach", price: 1.0 },
    ],
  },
  {
    id: 4,
    type: "menu",
    name: "Burger Menu",
    description: "Burger + fries + drink",
    price: 11.9,
    requiredOptions: {
      drink: [
        { id: "cola", name: "Coca-Cola" },
        { id: "fanta", name: "Fanta" },
        { id: "water", name: "Water" },
      ],
    },
  },
  {
    id: 5,
    type: "drink",
    name: "Coca-Cola",
    description: "0.5L",
    price: 2.5,
  },
  {
    id: 6,
    type: "drink",
    name: "Water",
    description: "Still water 0.5L",
    price: 1.5,
  },
  {
    id: 7,
    type: "dessert",
    name: "Nutella Dessert",
    description: "Sweet dessert with Nutella",
    price: 5.9,
  },
  {
    id: 8,
    type: "dessert",
    name: "Cheesecake",
    description: "Classic cheesecake",
    price: 6.5,
  },
];
