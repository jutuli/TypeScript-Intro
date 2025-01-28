import { allCategories } from "./apiCalls.ts";

// DOM-Elemente holen
const categoriesContainer = document.querySelector("#category-list");

// Kategorien in DOM schreiben
export async function renderCategories() {
  if (!allCategories || !categoriesContainer) return;
  allCategories.forEach((category) => {
    categoriesContainer.innerHTML += `
    <li>
        <button id="${category}"
            class="filter-btn cursor-pointer rounded-md border border-white bg-transparent px-10 py-2 font-semibold hover:bg-white hover:text-cyan-900"
            >
              ${category}
            </button>
          </li>
    `;
  });
}
