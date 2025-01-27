import { renderCategories } from "./categories.ts";
import { allProducts, renderProductCards } from "./products.ts";
import { filterByCategory, searchProducts } from "./ProductFiltering.ts";

// Elemente aus DOM holen
const searchInput = document.querySelector<HTMLInputElement>("#search-product");
const categoryButtons = document.querySelectorAll(".filter-btn");

// Seite initial mit allen Produkten laden
if (allProducts) {
  renderProductCards(allProducts);
}
renderCategories();

// Event Listeners für die Suche nach Produktnamen
searchInput?.addEventListener("input", () => {
  const searchInputValue = searchInput?.value || "";
  const filteredProducts = searchProducts(searchInputValue);
  if (filteredProducts) {
    renderProductCards(filteredProducts);
  }
});

// Eventlistener für das Filtern nach Kategorie
[...categoryButtons].forEach((button) => {
  button.addEventListener("click", () => {
    const filteredProducts = filterByCategory(button.id);
    if (filteredProducts) {
      renderProductCards(filteredProducts);
    }
  });
});

// Eventlistener für das Sortieren nach Preis/Rating
