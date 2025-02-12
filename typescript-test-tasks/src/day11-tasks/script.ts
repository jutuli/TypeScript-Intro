// - ======================= LEVEL 1_10 =========================
//Schreibe eine Funktion getHighestNumber
//Die Funktion bekommt als Parameter ein Array von numbers übergeben
//Die Funktion hat als Rückgabetyp den Typ number
function getHighestNumber(numbers: number[]): number {
  //Es soll der höchste Wert aus dem übergebenen Array von Zahlen ermittelt werden
  const highestNumber = Math.max(...numbers);
  //Anschließend wird dieser Wert mit return zurückgegeben
  return highestNumber;
}

//Rufe die Funktion mit mehreren Arrays auf, um zu testen, ob sie richtig funktioniert
const numbers: number[] = [2, 5, 8, 2, 67, 65, 13, 33, 7, 3, 84, 13, 72];
const moreNumbers: number[] = [45, 234, 774, 123, 976, 232];

console.log(getHighestNumber(numbers));
console.log(getHighestNumber(moreNumbers));

// - ======================= LEVEL 2_3 =========================

// Schreibe eine Funktion getNumberOfVowels
function getNumberOfVowels(text: string): number {
  // Sie soll die Anzahl der Vokale (A, E, I, O, U) in einem übergebenen String zählen und zurückgeben.
  let NumberOfVowels = 0;
  // Verwende eine Schleife, um jeden Buchstaben im übergebenen String zu durchzugehen, und eine Bedingung, um zu prüfen, ob es sich um einen Vokal handelt.
  for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i].toLowerCase())) {
      ++NumberOfVowels;
    }
  }
  return NumberOfVowels;
}
// Teste die Funktion mit mehreren Strings
console.log(getNumberOfVowels("Lorem ipsum dolor sit amet"));
console.log(getNumberOfVowels("Consetetur sadipscing elitr, sed diam"));
console.log(getNumberOfVowels("Nonumy eirmod tempor invidunt ut labore et"));

// - ======================= LEVEL 2_4 =========================
// Schreibe eine Funktion addToFifty(): void
function addToFifty(): void {
  // In der Funktion soll in einer Schleife eine Zufallszahl zwischen 1 und 10 generiert werden
  // Die Zahl soll jeweils auf der Konsole ausgegeben werden
  // Die Zufallszahlen sollen so lange aufaddiert werden, bis die Zahl 50 überschritten wird
  let sum: number = 0;
  let num: number = 0;
  while (sum <= 50) {
    num = Math.ceil(Math.random() * 10);
    console.log(`This Number is being added: ${num}`);
    sum += num;
  }
  console.log(`${sum} > 50. Stopping right here`);
}

addToFifty();
// - ======================= LEVEL 3_4 =========================

// In dieser Aufgabe soll mit Hilfe eines Loops etwas berechnet werden.
const parentElement = document.querySelector<HTMLElement>(".task-3-4");
// Es gibt ein input-Feld, in dem der/die User:in eine Nummer eingeben soll.
const inputNumElement = document.createElement("input");
inputNumElement.type = "number";
inputNumElement.placeholder = "Maximale Zahl";
parentElement?.appendChild(inputNumElement);
// Es gibt zwei select-Optionen, bei denen der/die User:in eine Zahl zwischen 2 und 9 auswählen kann.
// Select-Element anlegen
const numASelectElement = document.createElement("select");
const numBSelectElement = document.createElement("select");
const options: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
// Für jede Option im Options-Array ein Option-Element in numASelectElement & numBSelectElement anlegen
options.forEach((value) => {
  const optionA = document.createElement("option");
  optionA.value = value.toString();
  optionA.textContent = value.toString();
  numASelectElement.appendChild(optionA);
  const optionB = document.createElement("option");
  optionB.value = value.toString();
  optionB.textContent = value.toString();
  numBSelectElement.appendChild(optionB);
});
parentElement?.appendChild(numASelectElement);
parentElement?.appendChild(numBSelectElement);

// Button zum Abschicken der Eingabe einfügen
const buttonElement = document.createElement("button");
buttonElement.textContent = "Calculate";
parentElement?.appendChild(buttonElement);

// Result Element einfügen
const resultElement = document.createElement("ü");
parentElement?.appendChild(resultElement);

// User-Eingaben holen & auf Button Klick Funktion ausführen
buttonElement.addEventListener("click", () => {
  const inputNum: number = parseInt(inputNumElement.value);
  const numASelect: number = parseInt(numASelectElement.value);
  const numBSelect: number = parseInt(numBSelectElement.value);

  // Es soll jede Zahl von 0 bis zu der Zahl, die der User in das Input-Feld eingegeben hat, überprüft werden. Wenn diese Zahl durch eine der ausgewählten Zahlen teilbar ist, soll sie zur Gesamtsumme addiert werden.
  let sumDivisibleSelects: number = 0;
  for (let i = 0; i <= inputNum; i++) {
    if (i % numASelect === 0 || i % numBSelect === 0) {
      sumDivisibleSelects += i;
    }
  }

  // ResultElement mit Result füllen
  resultElement.textContent = `${sumDivisibleSelects}`;
});

// - ======================= LEVEL 3_5 =========================
// Schreibe eine Funktion, die die Fakultät (engl. Factorial) einer übergegebenen Zahl vom Typ number berechnet und das Ergebnis der Fakultätsberechnung zurückgibt.
// Verwende eine Schleife, um die Multiplikation der Zahlen von 1 bis n durchzuführen.
// Wenn 0 und 1 als Parameter übergeben werden, soll direkt das Ergebnis 1 zurückgegeben werden
// Logik:“Die Fakultät einer Zahl ist das Produkt aller positiven ganzen Zahlen kleiner oder gleich dieser Zahl.”

function calcFactorial(num: number): number {
  let factorial: number = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calcFactorial(0));
console.log(calcFactorial(1));
console.log(calcFactorial(2));
console.log(calcFactorial(3));
console.log(calcFactorial(4));
console.log(calcFactorial(5));
console.log(calcFactorial(6));

// - ======================= LEVEL 3_6 =========================
//Durchschnitt  <  50: "Ungenügend"
//50 <=Durchschnitt  <  60: "Mangelhaft"
//60 <= Durchschnitt < 70: "Ausreichend"
//70 <= Durchschnitt < 80: "Befriedigend"
//80 <= Durchschnitt < 90: "Gut"
//90 <= Durchschnitt: "Sehr gut"

type Grade = {
  min: number;
  max: number;
  grade: string;
};

const grades: Grade[] = [
  { min: 0, max: 49, grade: "Ungenügend" },
  { min: 50, max: 59, grade: "Mangelhaft" },
  { min: 60, max: 69, grade: "Ausreichend" },
  { min: 70, max: 79, grade: "Befriedigend" },
  { min: 80, max: 89, grade: "Gut" },
  { min: 90, max: 100, grade: "Sehr gut" },
];

//Schreibe eine Funktion, die den Durchschnitt von Punkten einer Klassenarbeit aus einem Array berechnet und eine Bewertung ausgibt
//Die Funktion hat demnach einen Parameter vom typ number[]
// Die Punkte pro Klassenarbeit und damit die Werte im Array können jeweils zwischen 0 bis  100 liegen
//Anhand des Punktedurchschnitts soll eine Bewertung ausgegeben werden.
function getTestGrade(results: number[]): string {
  let totalScore: number = 0;
  for (let i = 0; i < results.length; i++) {
    totalScore += results[i];
  }
  //Berechne den Punktedurchschnitt
  let averageScore = parseFloat((totalScore / results.length).toFixed(2));

  // Übersetzung des averageScores in eine Note

  const testGrade = grades.find(
    (grade) => averageScore >= grade.min && averageScore <= grade.max
  );

  return testGrade
    ? testGrade.grade
    : "Der Durchschnittswert liegt außerhalb des Bereichs 0-100. Bitte prüfe deine Eingabe.";
}

//Teste die Funktion mit verschiedenen Arrays
const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];
console.log("Deine Note ist:", getTestGrade(results));
const results1 = [65, 74, 73, 71, 90, 20, 12, 87, 34, 76, 89];
console.log("Deine Note ist:", getTestGrade(results1));

const results2 = [90, 92, 88, 95, 93, 78, 99, 93, 91];
console.log("Deine Note ist:", getTestGrade(results2));

const results3 = [4, 5, 4, 6, 8, 20, 4, 8, 2];
console.log("Deine Note ist:", getTestGrade(results3));

const results4 = [100, 300, 400, 200, 440];
console.log("Deine Note ist:", getTestGrade(results4));
