//- ==================== LEVEL 1_1 =====================
// Erstelle ein Set, das Strings enthält → new Set
// Es soll starWarsCharacters heißen und die Anfangswerte “Luke Skywalker”, “Darth Vader” und “Obi Wan Kenobi” beinhalten

const starWarsCharacters = new Set<string>([
  "Luke Skywalker",
  "Darth Vader",
  "Obi Wan Kenobi",
]);

// Lass dir den Inhalt des Sets auf der Konsole ausgeben
console.log(starWarsCharacters);

// Füge “Leia Organa” hinzu

starWarsCharacters.add("Leia Organa");

// Lass dir den Inhalt des Sets auf der Konsole ausgeben

console.log(starWarsCharacters);

// Füge erneut “Leia Organa” hinzu

starWarsCharacters.add("Leia Organa"); //-> wird nicht nochmal hinzugefügt, da im Set jedes Element nur 1x enthalten sein dar

// Lass dir den Inhalt des Sets auf der Konsole ausgeben

console.log(starWarsCharacters);

//- ==================== LEVEL 2_1 =====================
// Erstelle ein Array vom Typ String mit Marvel-Charakteren: Iron Man, Captain America, Thor, Hulk, Black Widow, Spider Man

const marvelCharacters: string[] = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider Man",
];

// Füge in das Array nochmal Iron Man und Thor hinten hinzu

marvelCharacters.push("Iron Man");
marvelCharacters.push("Thor");

// Lass dir den Inhalt des Arrays auf der Konsole ausgeben

console.log(marvelCharacters);

// Erstelle ein neues Set, dass das Array als Basis hat

const singleMarvelCharacters = new Set<string>(marvelCharacters);

// Lass dir den Inhalt des Sets auf der Konsole ausgeben

console.log(singleMarvelCharacters);
