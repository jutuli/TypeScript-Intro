import { allProducts } from "./Products";

allProducts;

// Suchfunktion um den Titel der Produkte zu durchsuchen
export function searchProducts(input: string) {
  if (!allProducts) return;
  input = input.toLowerCase();
  const matchingProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(input),
  );
  return matchingProducts;
}

export function filterByCategory(category: string) {
  if (!allProducts) return;
  const matchingProducts = allProducts.filter(
    (product) => product.category === category,
  );
  return matchingProducts;
}
