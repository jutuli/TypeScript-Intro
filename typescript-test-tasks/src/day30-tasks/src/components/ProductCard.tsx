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

//- Variante 2 (im Kurs gemeinsam gemacht)

// je nach Quelle sieht man bei interfaces z.B. I davor (IProductCardProps) => ist allerdings eine Präferenzfrage, gibt kein Best Practuce da
//? als Typ Komponentennamen + "Props" nehmen => sehr gängig
type ProductCard2Props = {
  imgUrl: string;
  title: string;
  price: number;
  featured: boolean;
};

//? hier ist Destructuring sehr typisch => statt "props" schreiben wir oben direkt die Elemente rein, sodass wir dann auch nicht props.xyz aufrufen müssen, sondern es ist direkt unter ihrem Namen verfügbar
// was hier dann passiert:
// const {imgUrl, title, price} = props
// was wiederum die Kurzform ist von folgendem:
// const imgUrl = props.imgUrl
// const title = props.title
// const price = props.price
//? umlabeln ist möglich, aber eher selten => dann wäre es z.B. {imgUrl, title: productTitle, price} => da würde props.title auf productTitle umgelabelt werden
export function ProductCard2({ imgUrl, price, title }: ProductCard2Props) {
  return (
    <article className="flex flex-col items-center gap-3">
      <img src={imgUrl} alt={title} />
      <p className="font-serif">{title}</p>
      <p className="font-serif">{price.toFixed(2)}</p>
      <button className="cursor-pointer rounded-full bg-teal-600 px-12 py-3 font-serif font-bold text-white">
        Buy Now
      </button>
    </article>
  );
}

//? die ProductCard kann jetzt direkt in der App.tsx aufgerufen werden mit den konkreten Daten
