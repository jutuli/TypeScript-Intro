// Importiere die Funktionen aus operations.ts und aus operations2.ts in der app.ts

import { add, substract, multiply, divide } from "./operations.ts";
import {
  addNumbers,
  substractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./operations2.ts";

// Rufe die Funktionen mit beliebigen Zahlen auf
// Die Ergebnisse sollen in der Konsole ausgegeben werden.

console.log(add(4, 3));
console.log(substract(19, 4));
console.log(multiply(2, 10));
console.log(divide(12, 12));

console.log(addNumbers(4, 3));
console.log(substractNumbers(19, 4));
console.log(multiplyNumbers(2, 10));
console.log(divideNumbers(12, 12));
