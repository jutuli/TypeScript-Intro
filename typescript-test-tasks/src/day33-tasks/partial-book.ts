import { IBook } from "./book";

type PartialBook = Partial<IBook>;

export const partialBook: PartialBook = {
  author: "Sebastian Fitzek",
  name: "Der Insasse",
};

interface IPartialBook extends Partial<IBook> {}

export const partialBook2: IPartialBook = {
  name: "Die Therapie",
};
