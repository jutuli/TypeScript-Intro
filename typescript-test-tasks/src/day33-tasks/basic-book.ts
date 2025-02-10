import { IBook } from "./book";

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

export const basicBook: BasicBook = {
  author: "Sebastian Fitzek",
  name: "Die Therapie",
  numberOfPages: 331,
};
