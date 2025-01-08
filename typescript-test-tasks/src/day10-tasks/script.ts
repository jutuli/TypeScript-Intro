// - ======================= LEVEL 1_1 =========================
// Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let i = 1; i <= 10; i++) {
  console.log(`Hello World + ${i}`);
}

// - ======================= LEVEL 1_2 =========================

// Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// Wenn du mit Arrays arbeitest, musst du das Array initialisieren ->
// let numbersToTen: number[]  = [];
// Verwende den Befehl push() im Schleifenkörper.
// Gib zum Schluss die Variable numbersToTen in der Konsole aus.

let numbersToTen: number[] = [];

for (let i = 1; i <= 10; i++) {
  numbersToTen.push(i);
}

console.log(numbersToTen);

// - ======================= LEVEL 1_3 =========================
// Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// Lege dazu eine Variable counter mit dem Wert 0 an.
// Als Bedingung nutze in der Schleife "counter < 10".
// Gib den String "Hallo World + counter" in der Konsole aus.
// Erhöhe counter um eins.

let counter: number = 0;

while (counter < 10) {
  console.log("This is While Loop Number ", counter + 1);
  counter++;
}

// - ======================= LEVEL 1_7 =========================
// Erstelle einen Loop mit do...while.
// Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.

let num = 1;
let parentElement = document.querySelector("main");

do {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = `The number is ${num}`;
  parentElement?.appendChild(newParagraph);
  num++;
} while (num <= 5);

// - ======================= LEVEL 1_8 =========================
// Erstelle einen Loop mit do...while.
// Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.

let evenNum = 2;

do {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = `The even number is ${evenNum}`;
  parentElement?.appendChild(newParagraph);
  evenNum += 2;
} while (evenNum <= 20);

// - ======================= LEVEL 2_1 =========================
// - ======================= LEVEL 2_2 =========================
// - ======================= LEVEL 3_1 =========================
// - ======================= LEVEL 3_2 =========================
// - ======================= LEVEL 3_3 =========================
