import ky from "ky";

// DOM-Elemente holen
const productsContainer = document.querySelector("#products-list");

type Product = {
  category: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

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
const allProducts = await getProducts();

// Produkte in DOM schreiben
export async function renderProducts() {
  if (!allProducts || !productsContainer) return;
  allProducts.forEach((product: Product) => {
    productsContainer.innerHTML += `
    <li
            class="h-96 flex flex-col justify-between rounded-md border border-gray-100 bg-white p-4 shadow-md "
          >
            <div class="my-2 flex flex-col gap-4">
                <img
                  src="${product.image}"
                  alt="Product Image"
                  class="max-h-48 object-contain"
                />
              <h3 class="text-lg font-semibold">${product.title}</h3>
              <p class="text-right font-bold">${product.rating.rate} ⭐️</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xl font-bold text-green-900">$ ${product.price}</p>
              <button
                class="rounded-md bg-green-900 border border-green-900 px-4 py-2 font-bold tracking-wide text-slate-100 hover:bg-white hover:text-green-900"
              >
                Add to Cart
              </button>
            </div>
          </li>
    `;
  });
}
