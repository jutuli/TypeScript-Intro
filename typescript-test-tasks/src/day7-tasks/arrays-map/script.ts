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

// - =================== LEVEL 1_6 ==================
