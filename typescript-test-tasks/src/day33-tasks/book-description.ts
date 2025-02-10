import { IBook } from "./book";

type BookDescription = Pick<IBook, "name" | "shortDescription">;

export const bookDescription: BookDescription = {
  name: "Die Therapie",
  shortDescription:
    "In der Psychothriller-Roman 'Die Therapie' von Sebastian Fitzek verschwindet die zwölfjährige Tochter eines renommierten Psychiaters spurlos, was ihn Jahre später in eine düstere und rätselhafte Begegnung mit einer mysteriösen Patientin führt, die behauptet, mehr über das Verschwinden zu wissen.",
};

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

export const bookDescription2: IBookDescription = {
  name: "Das Paket",
  shortDescription:
    "In 'Das Paket' von Sebastian Fitzek wird die Psychiaterin Emma Stein nach einem traumatischen Erlebnis von Paranoia geplagt und glaubt, dass der Serienmörder 'Der Friseur' hinter einem mysteriösen Paket steckt, das an sie geliefert wird.",
};
