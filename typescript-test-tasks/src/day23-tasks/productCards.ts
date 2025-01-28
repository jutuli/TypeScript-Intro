import { Product } from "./types.ts";

// DOM-Elemente holen
const productsContainer = document.querySelector("#products-list");

// Produkte in DOM schreiben
export async function renderProductCards(selectedProducts: Product[]) {
  if (!selectedProducts || !productsContainer) return;
  // Container leeren bevor neu gerendert wird
  productsContainer.innerHTML = "";
  selectedProducts.forEach((product: Product) => {
    productsContainer.innerHTML += `
    <li
            class="h-[420px] flex flex-col justify-between rounded-md border border-gray-100 bg-white p-4 shadow-md "
          >
            <div class="my-2 flex flex-col gap-4">
              <div class="h-48 flex items-center justify-center">
                <img
                  src="${product.image}"
                  alt="Product Image"
                  class="max-h-48 object-contain"
                />
              </div>
              <h3 class="text-lg font-semibold line-clamp-2">${product.title}</h3>
              <p class="text-right font-bold">${product.rating.rate} ⭐️</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xl font-bold text-green-900">$ ${product.price}</p>
              <button
                class="rounded-md bg-green-900 border border-green-900 px-4 py-2 font-bold tracking-wide text-slate-100 hover:bg-white hover:text-green-900 hover:cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </li>
    `;
  });
}
