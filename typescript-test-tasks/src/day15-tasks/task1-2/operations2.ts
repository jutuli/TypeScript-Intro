// Kopiere die Funktionen aus der operations.ts
// Exportiere diese Funktionen am Dateiende mit den neuen Namen: addNumbers, subtractNumbers, multiplyNumbers und divideNumbers

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

export {
  add as addNumbers,
  substract as substractNumbers,
  multiply as multiplyNumbers,
  divide as divideNumbers,
};
