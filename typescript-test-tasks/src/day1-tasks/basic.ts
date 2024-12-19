// - TASK - Level 1-11
console.log("Welcome");

// - TASK - Level 1-12
let dogName = "Leon";
console.log(dogName);

dogName = "elf";

let age = 44;
console.log(age);
age = 23;
console.log(age);

let seventeen = 17;
const sum = seventeen + 44;
console.log(sum);

// - TASK - Level 1-13

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// - TASK Level 1-8
let x: number = 20;
let y: number = 30;
let addition: number = x + y;
let substraction: number = x - y;
let substractionTwo: number = y - x;
let multiplication: number = x * y;
let division: number = x / y;
console.log("Addition: " + addition);
console.log("Substraction: " + substraction);
console.log("SubstractionTwo: " + substractionTwo);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);

let z: number = 10;
let resultOne: number = (x * y) / z;
console.log("ResultOne: " + resultOne);

let a: number = 15;
let b: number = 9;
let modulo: number = a % b;
console.log("Modulo: " + modulo);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log("ResultTwo: " + resultTwo);

let increment: number = ++a;
console.log("Increment: " + increment);
let decrement: number = --b;
console.log("Decrement: " + decrement);

let resultThree: number = a - b;
console.log("ResultThree: " + resultThree);

let resultRest: number = resultOne % resultTwo;
console.log("ResultRest: " + resultRest);

// - TASK Level 1-16

// Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:
let score: number = 5 + 5 * 10;
console.log("Ergebnis: " + score);

// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:
let score1 = (5 + 5) * 10;
console.log("Ergebnis: " + score1);

// Du kannst Werte auf Variablen addieren:
let score2 = 0;
score2 = score2 + 10;
console.log("Ergebnis: " + score2);

// Hiervon gibt es eine verkürzte Version:
score2 += 10;
console.log("Ergebnis: " + score2);

// Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

// Verwende den Inkrement-Operator:
zahl++;
console.log("increment: " + zahl);

// Verwende den Dekrement-Operator:
zahl--;
console.log("dekrement: " + zahl);
