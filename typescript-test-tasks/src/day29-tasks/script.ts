// ! ======================= UNION TYPES ==================
// - ==================== LEVEL 1_1 ==================
// Erstelle einen Union Type namens Result mit den Werten "success", "error" und "pending"

type Result = "success" | "error" | "pending";

// Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.

const result: Result = "success";

// Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
// Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt.

function handleResult(result: Result) {
  switch (result) {
    case "success":
      console.log("The result was: success.");
      break;
    case "error":
      console.log("The result was: error.");
      break;
    case "pending":
      console.log("The result was: pending.");
      break;
    default:
      console.log("The result is unknown.");
  }
}

// Teste die Funktion, indem du verschiedene Werte an sie übergibst.

handleResult(result);
handleResult("error");
handleResult("pending");

// - ==================== LEVEL 1_2 ==================
// Definiere einen Union Type namens NumericString, der entweder eine Zahl, einen String oder null darstellt.

type NumericString = number | string | null;

// Erstelle eine Variable vom Typ NumericString und weise ihr eine Zahl zu.

const num: NumericString = 12;

// Schreibe eine Funktion isNumber, die einen Parameter vom Typ NumericString akzeptiert.
// Implementiere isNumber, so dass sie überprüft, ob der übergebene Wert eine Zahl ist.

function isNumber(input: NumericString): boolean {
  return typeof input === "number";
}

// Teste die Funktion, indem du verschiedene Werte mit unterschiedlichen Datentypen an sie übergibst.

console.log(isNumber(num));
console.log(isNumber("One"));
console.log(isNumber(null));

// - ==================== LEVEL 2_1 ==================

// ! ======================= INTERSECTION TYPES ==================
// - ==================== LEVEL 1_1 ==================

// - ==================== LEVEL 1_2 ==================

// ! ======================= ERROR HANDLING ==================
// - ==================== LEVEL 1_1 ==================

// - ==================== LEVEL 1_2 ==================

// - ==================== LEVEL 2_1 ==================
