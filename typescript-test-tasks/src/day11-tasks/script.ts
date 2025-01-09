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

// - ======================= LEVEL 3_5 =========================
// - ======================= LEVEL 3_6 =========================
