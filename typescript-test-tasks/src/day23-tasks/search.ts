import { allProducts } from "./products";

allProducts;

export function searchProducts(input: string) {
  if (!allProducts) return;
  input = input.toLowerCase();
  const matchingProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(input),
  );
  return matchingProducts;
}
