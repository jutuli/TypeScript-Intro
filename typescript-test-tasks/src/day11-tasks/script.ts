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
// - ======================= LEVEL 2_4 =========================
// - ======================= LEVEL 3_4 =========================
// - ======================= LEVEL 3_5 =========================
// - ======================= LEVEL 3_6 =========================
