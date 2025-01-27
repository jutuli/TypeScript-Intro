import { renderCategories } from "./categories.ts";
import { allProducts, renderProducts } from "./products.ts";
import { searchProducts } from "./search.ts";

if (allProducts) {
  renderProducts(allProducts);
}
renderCategories();

// Elemente aus DOM holen
const searchInput = document.querySelector<HTMLInputElement>("#search-product");

// Event Listeners bei Buttons etc.
searchInput?.addEventListener("input", () => {
  const searchInputValue = searchInput?.value || "";
  const filteredProducts = searchProducts(searchInputValue);
  if (filteredProducts) {
    renderProducts(filteredProducts);
  }
});
