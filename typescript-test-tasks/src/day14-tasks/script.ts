// - ====================== LEVEL 1_2 =======================
// Konvertiere nach dem Schreiben der Funktionen alle Funktionen in die neue Arrow-Functions Schreibweise.
// Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.

function writeHello(): void {
  const newElement = document.createElement("p");
  document.body.append(newElement);
  newElement.textContent = "Hello";
}

writeHello();

const writeHelloArrow = (): void => {
  const newElement = document.createElement("p");
  document.body.append(newElement);
  newElement.textContent = "Hello Arrow";
};

writeHelloArrow();

// Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.

function calcSum(numA: number, numB: number): void {
  console.log("Die Summe beträgt", numA + numB);
}

calcSum(2, 4);

const calcSumArrow = (numA: number, numB: number): void =>
  console.log("Die Summe beträgt", numA + numB);

calcSumArrow(2, 5);

// Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
function multiplyNumbers(numA: number, numB: number): void {
  window.alert(numA * numB);
}

multiplyNumbers(3, 9);

const multiplyNumbersArrow = (numA: number, numB: number): void =>
  window.alert(numA * numB);

multiplyNumbersArrow(3, 2);

// Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.

function showUserDetails(user: object): void {
  console.log(Object.keys(user));
}

showUserDetails({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@acme.inc",
});

const showUserDetailsArrow = (user: object): void =>
  console.log(Object.keys(user));

showUserDetailsArrow({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@acme.inc",
});

// - ====================== LEVEL 1_6 =======================

// Lege einen Typ Monster mit folgenden Pflicht-Eigenschaften an: name, type, health, strength, speed

type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};

type createMonsterParams = {
  name: string;
  type: string;
  health?: number;
  strength?: number;
  speed?: number;
};

// Erstelle eine Funktion createMonster, die ein Monster erzeugt und zurückgibt
// name und type müssen immer an die Funktion übergeben werden
// werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
// health = 100, strength = 50, speed = 25

function createMonster({
  name,
  type,
  health = 100,
  strength = 50,
  speed = 25,
}: createMonsterParams): Monster {
  const createdMonster: Monster = { name, type, health, strength, speed };
  console.log(createdMonster);
  return createdMonster;
}

// Alternativ: nicht als Objekt angeben, sondern als einzelne Parameter
// kann zu Problemen führen, wenn ich nur bestimmte optionale Parameter mit Argument besetzen will (z.B. nur den letzten)
// function createMonster2(
//   name: string,
//   type: string,
//   health: number = 100,
//   strength: number = 50,
//   speed: number = 25
// ): Monster {
//   const createdMonster: Monster = { name, type, health, strength, speed };
//   return createdMonster;
// }

// Lege mit Hilfe der Funktion mehrere Monster an, gebe dabei an:
// 2 Parameter

createMonster({ name: "rainbow", type: "sky monster" });

// 3 Parameter

createMonster({ name: "blizzard", type: "sky monster", speed: 300 });

// 4 Parameter
createMonster({
  name: "earthshaker",
  type: "forest monester",
  health: 70,
  strength: 40,
});

// 5 Parameter
createMonster({
  name: "giant worm",
  type: "forest monester",
  health: 97,
  strength: 23,
  speed: 245,
});

// - ====================== LEVEL 3_1 =======================
// Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe der <section> und die Textfarbe der Überschrift <h2>.
// Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// In deinem TS-Code definierst du dann was beim Klick auf den jeweiligen SuperBall passieren soll.
// schreibe eine Funktion für die Änderung der Farben, die in jedem EventHandler verwendet wird
// Lass dir die Superballs auf Basis eines Arrays von Objekten im Code generieren

// Type Superball anlegen für die Erstellung von Superball-Obekten
type Superball = {
  bgColor: string;
  textColor: string;
};

// Array mit Superball-Objekten
const superballObjects: Superball[] = [
  {
    bgColor: "green",
    textColor: "purple",
  },
  {
    bgColor: "mediumpurple",
    textColor: "gold",
  },
  {
    bgColor: "black",
    textColor: "orange",
  },
  {
    bgColor: "midnightblue",
    textColor: "skyblue",
  },
];

// Funktion um Superballs zu kreieren + in DOM zu überführen
const container = document.querySelector(".superballs");
function createSuperballs() {
  // Falls es container nicht gibt, aus Funktion raus
  if (!container) return;
  superballObjects.forEach((superball: Superball) => {
    // Superball-Element anlegen und in DOM überführen
    const ball = document.createElement("div");
    container.appendChild(ball);
    ball.className = "superball";
    ball.style.background = `linear-gradient(45deg, ${superball.bgColor} 0 50%, ${superball.textColor} 50% 100%)`;
  });
}

createSuperballs();

// Funktion zum Ändern der Farben
function changeColors(superball: Superball) {
  // Section-Element (hier soll die BG-Color geändert werden) & H2-Element (hier soll TextColor geändert werden) holen
  const section = document.querySelector<HTMLElement>("#task-3-1");
  const header = document.querySelector<HTMLElement>("h2");
  if (section) section.style.background = superball.bgColor;
  if (header) header.style.color = superball.textColor;
}

// EventListener bei Klick auf jeweils ein bestimmtes Div-Element der Klasse superball um changeColors auf dem jeweiligen Object auszuführen
[...document.querySelectorAll<HTMLDivElement>(".superball")]?.forEach(
  (ball, index: number) =>
    ball.addEventListener("click", () => changeColors(superballObjects[index]))
);
