class IceCreamFlavor {
  name: string = "";
  price: number = 0;
  isPopular: boolean = false;
  description?: string;

  constructor(
    name: string,
    price: number,
    isPopular: boolean,
    description?: string,
  ) {
    this.name = name;
    this.price = price;
    this.isPopular = isPopular;
    this.description = description;
  }
}

const vanilla = new IceCreamFlavor("Vanilla", 2, true);

const chocolate = new IceCreamFlavor(
  "Chocolate",
  2,
  true,
  "the creamiest chocolate ice-cream you can imagine",
);

const aspargus = new IceCreamFlavor("Aspargus", 3, false);

const strawberry = new IceCreamFlavor("Strawberry", 1.5, true);

export const iceCreamFlavors: IceCreamFlavor[] = [
  vanilla,
  chocolate,
  aspargus,
  strawberry,
];
