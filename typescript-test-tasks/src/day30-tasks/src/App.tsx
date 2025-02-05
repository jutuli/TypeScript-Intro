import RenderProducts from "./components/Products";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <h1 className="m-4 text-lg font-bold">My ShoppingList</h1>
      <ToDoList />
      <h1 className="m-4 text-lg font-bold">My Product Shop</h1>
      <RenderProducts />
    </>
  );
}

export default App;
