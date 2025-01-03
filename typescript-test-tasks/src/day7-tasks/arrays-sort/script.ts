// - ================ LEVEL 1_2 ===============
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.

const codingLanguages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortDescending() {
  return codingLanguages.sort().reverse();
}

console.log(sortDescending());

// - ================ LEVEL 2_1 ===============
// Schreibe ein kleines Programm, das Zeichenketten umkehrt.
// Diese Function soll jeden String, der ihr als Parameter übergeben wird, umdrehen können.

function reverseStrings(word: string) {
  const charactersArray = Array.from(word);
  const reversedCharactersArray = charactersArray.reverse();
  return console.log(reversedCharactersArray.join(""));
}

reverseStrings("Sergio");
reverseStrings("Hannah");
reverseStrings("Regallager");
reverseStrings("Reliefpfeiler");
reverseStrings("Rentner");
reverseStrings("Ella mag alle Bohnen");
reverseStrings("han nesaH has ennaH");
