import { IBook } from "./book";

type ReadOnlyBook = Readonly<IBook>;

export const readonlyBook: ReadOnlyBook = {
  author: "Sebastian Fitzek",
  name: "Das Kalendermädchen",
  publishingYear: "2016",
  numberOfPages: 368,
};

// readonlyBook.name = "Der Insasse"

interface IReadOnlyBook extends Readonly<IBook> {}

export const readonlyBook2: IReadOnlyBook = {
  author: "Sebastian Fitzek",
  name: "Der Insasse",
  publishingYear: "2018",
  numberOfPages: 384,
};
