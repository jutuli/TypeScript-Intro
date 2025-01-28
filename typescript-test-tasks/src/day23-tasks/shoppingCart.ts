import { Product } from "./types.ts";

const shoppingCart: Product[] = [];

// Elemente zum Shopping-Cart hinzufügen
export function addToCart(product: Product) {
  shoppingCart.push(product);
}
