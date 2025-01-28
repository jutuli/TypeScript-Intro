import { allProducts } from "./apiCalls.ts";
import { renderCategories } from "./categories.ts";
import { renderProductCards } from "./productCards.ts";
import { Product } from "./types.ts";
import { filterByCategory, searchProducts } from "./productFiltering.ts";
import { sortByPriceAsc, sortByRatingAsc } from "./productSorting.ts";

// Elemente aus DOM holen für Interaktion mit der Seite
const searchInput = document.querySelector<HTMLInputElement>("#search-product");
const categoriesContainer = document.querySelector("#category-list");
const sortSelect = document.querySelector<HTMLSelectElement>("#sort-product");

// Seite initial mit allen Produkten laden
if (allProducts && allProducts.length > 0) {
  renderProductCards(allProducts);
  renderCategories();
}

// Event Listeners für die Suche nach Produktnamen
searchInput?.addEventListener("input", () => {
  const searchInputValue = searchInput?.value || "";
  const filteredProducts = searchProducts(searchInputValue);
  if (filteredProducts) {
    renderProductCards(filteredProducts);
  }
});

// Eventlistener für das Filtern nach Kategorie
if (categoriesContainer) {
  // Da Elemente erst später gerendert werden, wird der Eventlistener auf den Container gesetzt
  categoriesContainer.addEventListener("click", (event) => {
    // mit target wird das Element geholt, auf das geklickt wurde (wir wollen nur auf die Buttons reagieren)
    const button = <HTMLButtonElement>event.target;
    // Wenn das Button-Element eine Klasse filter-btn hat, wird die Funktion filterByCategory aufgerufen
    if (button.className.includes("filter-btn")) {
      const filteredProducts = filterByCategory(button.id);
      if (filteredProducts) {
        renderProductCards(filteredProducts);
      }
    }
  });
}

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
