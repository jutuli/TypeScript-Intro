type ProductProps = {
  key: number;
  img: string;
  productName: string;
  price: number;
};

function ProductCard(props: ProductProps) {
  return (
    <li className="flex aspect-square flex-col gap-2 drop-shadow-md">
      <img className="m-2 rounded-md" src={props.img} alt={props.productName} />
      <p className="ml-2 font-bold">{props.productName}</p>
      <p className="ml-2">$ {props.price}</p>
      <button className="text-bold mx-2 rounded-md bg-red-400 px-3 py-2 text-white hover:cursor-pointer">
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
