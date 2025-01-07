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
