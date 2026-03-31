import { products } from "@/src/data/products";
import { Product } from "@/src/types/product";

const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await simulateDelay(500);

  return products;
};
