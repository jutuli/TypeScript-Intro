import ProductCard from "./ProductCard";
import { products } from "../data";

function RenderProducts() {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            img={product.img}
            productName={product.productName}
            price={product.price}
          />
        );
      })}
    </ul>
  );
}

export default RenderProducts;
