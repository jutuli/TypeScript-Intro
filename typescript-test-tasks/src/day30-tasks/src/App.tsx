import { ProductCard2 } from "./components/ProductCard";
import RenderProducts from "./components/Products";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <h1 className="m-4 text-lg font-bold">My ShoppingList</h1>
      <ToDoList />
      <h1 className="m-4 text-lg font-bold">My Product Shop</h1>
      <RenderProducts />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ProductCard2
          title="Lotion"
          price={60}
          featured={true}
          imgUrl="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
        />
        <ProductCard2
          title="More Lotion"
          price={20}
          featured={false}
          imgUrl="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
        />
      </div>
    </>
  );
}

export default App;
