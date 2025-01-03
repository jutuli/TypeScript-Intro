// - =================== LEVEL 1_2 ==================
// Nutze die map()-Methode, um in einer neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// Gib upperDrinks in der Konsole aus.
// Nutze die Map-Methode um für jedes Element auf der Konsole folgendes auszugeben: ‘I like [drink]’

const drinks: Array<string> = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

const upperDrinks = drinks.map((drink) => drink.toUpperCase());
console.log(upperDrinks);

const iLikeDrinks = drinks.map((drink) => `I like ${drink}!`);
console.log(iLikeDrinks);

// - =================== LEVEL 1_4 ==================
// Schreibe Code, der mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius: number[] = fahrenheit.map((temperature) =>
  parseFloat(((temperature - 32) / 1.8).toFixed(2))
);
console.log(celsius);

// - =================== LEVEL 1_5 ==================
// In der map-Methode soll Folgendes passieren:
// 1. Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
// 2. Wenn ja: Addiere 100 zu dieser Zahl hinzu.
// 3. Wenn nein: Lasse die Zahl so wie sie ist
// Das Ergebnis der map-Methode soll in einem neuen Array gespeichert werden
// Gib das Ergebnis in der Konsole aus.

const checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const divisibleNumbers: number[] = checkNumber.map(function (num) {
  if (num % 3 === 0) {
    return num + 100;
  } else {
    return num;
  }
});
console.log(divisibleNumbers);

// - =================== LEVEL 1_6 ==================
