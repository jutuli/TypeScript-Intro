// Erstelle in der operations.ts vier Funktionen
// add (a: number, b: number)
// subtract (a: number, b: number)
// multiply (a: number, b: number)
// divide (a: number, b: number)
// Die Funktionen sollen jeweils den Wert der Addition, Subtraktion, Multiplikation und Division zurückgeben
// Exportiere die Funktionen am Dateiende mit ihren tatsächlichen Namen

function add(a: number, b: number) {
  return a + b;
}

function substract(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function divide(a: number, b: number) {
  return a / b;
}

export { add, substract, multiply, divide };
