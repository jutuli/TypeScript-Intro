import { renderCategories } from "./Categories.ts";
import { allProducts, renderProductCards, Product } from "./Products.ts";
import { filterByCategory, searchProducts } from "./ProductFiltering.ts";
import { sortByPriceAsc, sortByRatingAsc } from "./ProductSorting.ts";

// Elemente aus DOM holen
const searchInput = document.querySelector<HTMLInputElement>("#search-product");
const categoryButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.querySelector<HTMLSelectElement>("#sort-product");

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
sortSelect?.addEventListener("change", () => {
  let sortedProducts: Product[] = [];
  if (!sortedProducts) return;
  switch (sortSelect.value) {
    case "price-asc":
      sortedProducts = sortByPriceAsc();
      renderProductCards(sortedProducts);
      break;
    case "price-desc":
      sortedProducts = sortByPriceAsc().reverse();
      renderProductCards(sortedProducts);
      break;
    case "rating-asc":
      sortedProducts = sortByRatingAsc();
      renderProductCards(sortedProducts);
      break;
    case "rating-desc":
      sortedProducts = sortByRatingAsc().reverse();
      renderProductCards(sortedProducts);
      break;
  }
});
