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
// Erstelle folgende Datentypen (type)
// Circle
// shape: name (”circle”)
// radius: number
// Square
// shape: name (”square”)
// sideLength: number
// Triangle
// shape: name (”triangle”)
// base: number
// height: number
// Rectangle
// shape: name (”rectangle”)
// width: number
// height: number

type Circle = {
  shape: "circle";
  radius: number;
};

type Square = {
  shape: "square";
  sideLength: number;
};

type Triangle = {
  shape: "triangle";
  base: number;
  height: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

// Schreibe eine Funktion calculateArea, die die Fläche berechnet
// Der Übergabeparameter soll ein UnionType von Circle, Square, Triangle,  Rectangle und undefined sein
// der Rückgabewert ist die Größe der Fläche als number
// Je nach Form, soll die Fläche entsprechend berechnet werden (Recherchiere nochmal, wenn du dich nicht mehr an die Formeln erinnern kannst)
// Wird undefined übergeben, soll ein Fehler geworfen werden “No suitable shape found.”

function calculateArea(
  object: Circle | Square | Triangle | Rectangle | undefined,
): number {
  switch (object?.shape) {
    case "circle":
      return object.radius ** 2 * Math.PI;
      break;
    case "square":
      return object.sideLength ** 2;
      break;
    case "rectangle":
      return object.width * object.height;
      break;
    case "triangle":
      return (object.base * object.height) / 2;
    default:
      throw new Error("The area could not be calculated.");
  }
}

// Erstelle je ein Objekt für jede Form und übergebe sie an die Funktion calculateArea

const circle: Circle = { shape: "circle", radius: 2 };
const square: Square = { shape: "square", sideLength: 4 };
const rectangle: Rectangle = { shape: "rectangle", width: 10, height: 5 };
const triangle: Triangle = { shape: "triangle", base: 5, height: 3 };

console.log(calculateArea(circle));
console.log(calculateArea(square));
console.log(calculateArea(rectangle));
console.log(calculateArea(triangle));

// Teste auf den Fall, wenn undefined übergeben wird
console.log(calculateArea(undefined));

// ! ======================= INTERSECTION TYPES ==================
// - ==================== LEVEL 1_1 ==================

// - ==================== LEVEL 1_2 ==================

// ! ======================= ERROR HANDLING ==================
// - ==================== LEVEL 1_1 ==================

// - ==================== LEVEL 1_2 ==================

// - ==================== LEVEL 2_1 ==================
