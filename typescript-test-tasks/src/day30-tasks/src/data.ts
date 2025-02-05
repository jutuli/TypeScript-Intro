//- Task Level 1_1

export type ToDo = {
  id: number;
  toDo: string;
  isCompleted: boolean;
};

export const todos: ToDo[] = [
  { id: 1, toDo: "Laundry", isCompleted: false },
  { id: 2, toDo: "Buy Groceries", isCompleted: false },
  { id: 3, toDo: "Clean Living Room", isCompleted: true },
];

// - Task Level 1_2
export type Product = {
  img: string;
  productName: string;
  price: number;
};

export const products: Product[] = [
  {
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
    productName: "coconut lotion",
    price: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    productName: "camera",
    price: 60,
  },
  {
    img: "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
    productName: "shampoo",
    price: 20,
  },
];
