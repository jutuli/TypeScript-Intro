//- ==================== LEVEL 1_4 =====================
// Deklariere ein Array "friendNames" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"

const friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];

// Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen

for (const name of friendNames) {
  console.log(name);
}

// alternativ:
friendNames.forEach((name) => console.log(name));

// Verwende anschließend eine for … of - Schleife um alle Namen in der Konsole anzuzeigen
