export type Product = {
  category: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};
