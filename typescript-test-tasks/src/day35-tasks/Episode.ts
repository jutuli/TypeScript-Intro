import Actor from "./Actor";

class Episode {
  title: string;
  length: string;
  description: string;
  actors: Actor[];

  constructor(
    title: string,
    length: string,
    description: string,
    actors: Actor[],
  ) {
    (this.title = title),
      (this.description = description),
      (this.length = length),
      (this.actors = actors);
  }
}

export default Episode;
