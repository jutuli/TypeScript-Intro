import ky from "ky";
import { Product } from "./types";

//- PRODUCTS API CALLS
// Alle Produkte von der API holen
async function getProducts() {
  try {
    const productData: Product[] = await ky
      .get("https://fakestoreapi.com/products")
      .json();
    return productData;
  } catch (error) {
    console.log("There has been an error: ", error);
  }
}

// getProducts() ausführen und in Array speichern
export const allProducts = await getProducts();

//- CATEGORIES API CALLS
// Alle Kategorien von der API holen
async function getCategories() {
  try {
    const categoryData: string[] = await ky
      .get("https://fakestoreapi.com/products/categories")
      .json();
    return categoryData;
  } catch (error) {
    console.log("There has been an error: ", error);
  }
}

// getCategories() ausführen und in Array speichern
export let allCategories = await getCategories();
// jede Kategorie soll den Anfangsbuchstaben von jedem Wort großgeschrieben haben
allCategories = allCategories?.map((category) =>
  category
    // Category unterteilen in einzelne Wörter, erstes Zeichen großschreiben und wieder zusammenfügen
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
);
