import ky from "ky";

// DOM-Elemente holen
const categoriesContainer = document.querySelector("#category-list");

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
const allCategories = await getCategories();

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
