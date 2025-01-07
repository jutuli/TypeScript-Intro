//- ==================== LEVEL 1_1 =====================
// Wir wollen unsere fünf Lieblingsbands mit ihren Mitgliedern speichern
// Dazu verwenden wir den Datentyp Map
// Lege eine Map vom Datentyp string, string[] für den Bandnamen und die Mitglieder an und gib sie über die Konsole aus

const favoriteBands = new Map<string, string[]>();

favoriteBands.set("The Beatles", [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr",
]);

favoriteBands.set("Queen", [
  "Freddie Mercury",
  "Brian May",
  "Roger Taylor",
  "John Deacon",
]);

favoriteBands.set("Kiss", [
  "Gene Simmons",
  "Paul Stanley",
  "Ace Frehley",
  "Peter Criss",
]);

favoriteBands.set("Pink Floyd", [
  "Roger Waters",
  "David Gilmour",
  "Nick Mason",
  "Richard Wright",
]);

favoriteBands.set("The Rolling Stones", [
  "Mick Jagger",
  "Keith Richards",
  "Charlie Watts",
  "Ronnie Wood",
]);

console.log(favoriteBands);

// ======== alternative Schreibweise, um Map mit den Bands zu erstellen ======

const favoriteBands2 = new Map<string, string[]>([
  [
    "The Beatles",
    ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
  ],
  ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
  ["Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]],
  [
    "Pink Floyd",
    ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"],
  ],
  [
    "The Rolling Stones",
    ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
  ],
]);

console.log(favoriteBands2);

// Lass dir die Größe deiner Band-Map ausgeben

console.log(favoriteBands.size);

// Füge eine weitere Band zur Band-Map hinzu

favoriteBands.set("Metallica", [
  "James Hetfield",
  "Lars Ulrich",
  "Kirk Hammett",
  "Robert Trujillo",
]);

// Lass dir erneut die Größe deiner Band-Map ausgeben

console.log(favoriteBands.size);

// Hole dir einen Eintrag aus der Map

console.log(favoriteBands.get("Metallica"));

// Lass dir dort den Namen des letzten Mitglieds auf der Konsole ausgeben

console.log(favoriteBands.get("Metallica")?.at(-1));

//- ==================== LEVEL 2_1 =====================
//Prüfe, ob die Band “Metallica” in der Map enthalten ist

console.log(favoriteBands.has("Metallica"));

//Lege einen doppelten Eintrag an, also einen Bandnamen (=Key), den du bereits verwendet hast mit anderen Mitgliedern

favoriteBands.set("The Beatles", [
  "Johnny Lenny",
  "Pauly Meccy",
  "Georgie Harry",
  "Ringy Starry",
]);

//Hole dir den Eintrag mit get aus der Map aus lasse ihn auf der Konsole ausgeben

console.log(favoriteBands.get("The Beatles"));

//Welchen Eintrag bekommst du zurück? Schreibe es als Kommentar in deinen Code
// Die Values zu dem Key wurden überschrieben/ersetzt mit den neuen Werten

//- ==================== LEVEL 3_1 =====================
