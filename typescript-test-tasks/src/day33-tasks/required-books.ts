import { IBook } from "./book";

type RequiredBook = Required<IBook>;

export const requiredBook: RequiredBook = {
  author: "Sebastian Fitzek",
  name: "Das Paket",
  publishingYear: "2016",
  shortDescription:
    "In 'Das Paket' von Sebastian Fitzek wird die Psychiaterin Emma Stein nach einem traumatischen Erlebnis von Paranoia geplagt und glaubt, dass der Serienmörder 'Der Friseur' hinter einem mysteriösen Paket steckt, das an sie geliefert wird.",
  numberOfPages: 368,
};

interface IRequiredBook extends Required<IBook> {}

export const requiredBook2: IRequiredBook = {
  author: "Sebastian Fitzek",
  name: "Das Kalendermädchen",
  publishingYear: "2024",
  shortDescription:
    "In 'Das Kalendermädchen' von Sebastian Fitzek gerät eine junge Frau in Lebensgefahr, als ein psychopathischer Täter sie in einem tödlichen Spiel gefangen hält, das nach einem perfiden Kalenderprinzip verläuft.",
  numberOfPages: 368,
};
