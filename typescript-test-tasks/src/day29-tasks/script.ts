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
// console.log(calculateArea(undefined));

// ! ======================= INTERSECTION TYPES ==================
// - ==================== LEVEL 1_1 ==================
// Erstelle zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.
// Alcohol hat die Eigenschaften: name, percentage und type

type Alcohol = { name: string; percentage: number; type: string };
// Mixer hat die Eigenschaften: name, type und carbonated

type Mixer = { name: string; type: string; carbonated: boolean };

// Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.

type Cocktail = Alcohol & Mixer;

// Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.

const margarita: Cocktail = {
  name: "Margarita",
  percentage: 40,
  type: "Tequila",
  carbonated: false,
};

// Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.
console.log(margarita);

// - ==================== LEVEL 1_2 ==================
// Schreibe ein Funktion mixCocktail mit zwei Parametern
// alcohol: Alcohol
// mixer: Mixer
// Rückgabewert ist vom Intersection-Type Cocktail
// das zurückgegebene Objekt soll die Eigenschaften vom übergebenen alcohol und mixer enthalten
// bei Feld name wird eine Kombination aus beiden Objekten gesetzt, z. B.  alcohol.name = ‘Wodka’ und [mixer.name](http://mixer.name) = ‘Lemon’ ⇒ ‘Wodka Lemon’

function mixCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail {
  const cocktail = {
    name: `${alcohol.name} ${mixer.name}`,
    percentage: alcohol.percentage,
    type: `${alcohol.type} ${mixer.type}`,
    carbonated: mixer.carbonated,
  };
  return cocktail;
}

// Lege 2 Alkohol und zwei Mischgetränke an

const vodka: Alcohol = {
  name: "Vodka",
  percentage: 40,
  type: "Spirit",
};

const orangeJuice: Mixer = {
  name: "Orange",
  type: "Juice",
  carbonated: false,
};

const gin: Alcohol = {
  name: "Gin",
  percentage: 40,
  type: "Spirit",
};

const tonicWater: Mixer = {
  name: "Tonic",
  type: "Soda",
  carbonated: true,
};

// Rufe die Methode mixCocktail mit allen Kombinationen auf

console.log(mixCocktail(vodka, orangeJuice));
console.log(mixCocktail(gin, tonicWater));

// ! ======================= ERROR HANDLING ==================
// - ==================== LEVEL 1_1 ==================
// Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.

function greetUser() {
  try {
    const userName = window.prompt("What is your name?");
    // Werfe selbst einen Fehler, wenn kein Name eingegeben wurde
    if (!userName) throw new Error("No username was entered.");
    // Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
    console.log(`Hello ${userName}! Good to see you.`);
    // Verwende dann einen try-catch-Block, um diesen Fehler beim Abrufen des Benutzernamens abzufangen.
  } catch (Error) {
    console.log(Error);
    // Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.
    console.log("Hello and welcome!");
  }
}

greetUser();

// - ==================== LEVEL 1_2 ==================
// Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.

function generateLottoNumber(): number {
  // generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
  const randomNumber = Math.ceil(Math.random() * 100);
  // Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
  if (randomNumber > 49) throw new Error("The number is greater than 49.");
  // Ansonsten wird die Zahl als Rückgabewert zurückgegeben
  return randomNumber;
}

// Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
// Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln. Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.

let errorCount = 0;
const lottoResults: number[] = [];

while (lottoResults.length < 7) {
  try {
    const lottoNumber = generateLottoNumber();
    // Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
    if (!lottoResults.includes(lottoNumber)) {
      lottoResults.push(lottoNumber);
    }
  } catch (error) {
    errorCount++;
  }
}

// Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben
console.log(lottoResults);
console.log(
  `While generating the lotto numbers, there has been ${errorCount} error(s).`,
);

// - ==================== LEVEL 2_1 ==================
