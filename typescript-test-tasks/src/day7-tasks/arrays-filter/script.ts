// - ==================== LEVEL 1_8 =================
// Schreibe eine Function printEvenNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
// Schreibe eine Function printOddNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
// Nutze beide Funktionen für den Aufruf der filter-Methode
// Das Ergebnis sollen zwei Arrays sein: evenNumbers und oddNumbers

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers(num: number) {
  return num % 2 === 0 ? true : false;
}

function printoddNumbers(num: number) {
  return num % 2 === 1 ? true : false;
}
const evenNumbers = zahlen.filter(printEvenNumbers);
const oddNumbers = zahlen.filter(printoddNumbers);
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);
