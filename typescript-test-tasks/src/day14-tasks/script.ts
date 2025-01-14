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
