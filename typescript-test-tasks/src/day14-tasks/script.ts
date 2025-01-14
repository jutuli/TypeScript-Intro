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
// - ====================== LEVEL 3_1 =======================
