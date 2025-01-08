// - ======================= LEVEL 1_1 =========================
// Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let i = 1; i <= 10; i++) {
  console.log(`Hello World + ${i}`);
}

// - ======================= LEVEL 1_2 =========================

// Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// Wenn du mit Arrays arbeitest, musst du das Array initialisieren ->
// let numbersToTen: number[]  = [];
// Verwende den Befehl push() im Schleifenkörper.
// Gib zum Schluss die Variable numbersToTen in der Konsole aus.

let numbersToTen: number[] = [];

for (let i = 1; i <= 10; i++) {
  numbersToTen.push(i);
}

console.log(numbersToTen);

// - ======================= LEVEL 1_3 =========================
// Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// Lege dazu eine Variable counter mit dem Wert 0 an.
// Als Bedingung nutze in der Schleife "counter < 10".
// Gib den String "Hallo World + counter" in der Konsole aus.
// Erhöhe counter um eins.

let counter: number = 0;

while (counter < 10) {
  console.log("This is While Loop Number ", counter + 1);
  counter++;
}

// - ======================= LEVEL 1_7 =========================
// Erstelle einen Loop mit do...while.
// Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.

let num = 1;
let parentElement = document.querySelector("main");

do {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = `The number is ${num}`;
  parentElement?.appendChild(newParagraph);
  num++;
} while (num <= 5);

// - ======================= LEVEL 1_8 =========================
// Erstelle einen Loop mit do...while.
// Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.

let evenNum = 2;

do {
  let newParagraph = document.createElement("p");
  newParagraph.textContent = `The even number is ${evenNum}`;
  parentElement?.appendChild(newParagraph);
  evenNum += 2;
} while (evenNum <= 20);

// - ======================= LEVEL 2_1 =========================

// Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.
// Deklariere dafür die Function createImageNames.
// Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// Schreibe eine for-Schleife.
// Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode padStart() einsetzen.
// Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
// Gib das Array mit return aus der Funktion zurück
// Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames() {
  let returnArray: string[] = [];
  for (let i = 1; i <= 100; i++) {
    let imageNum: number = i;
    let imageNumWithPadding: string = imageNum.toString().padStart(3, "0");
    let imageName = `image_${imageNumWithPadding}.jpg`;
    returnArray.push(imageName);
  }
  return returnArray;
}

console.log(createImageNames());

// - ======================= LEVEL 2_2 =========================
// In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingegebenen Anzahl an Os aus dem Input-Feld.

// Neues Input-Element anlegen
let newInputElement = document.createElement("input");
newInputElement.type = "number";
// Neuen Button-Element anlegen
let newButtonElement = document.createElement("button");
newButtonElement.textContent = "Loop me";
// Neues Result-Element anlegen & stylen
let resultElement = document.createElement("p");
resultElement.style.color = "teal";

// Hinzufügen von Input-Element + Button-Element + Result-Element in HTML
parentElement?.appendChild(newInputElement);
parentElement?.appendChild(newButtonElement);
parentElement?.appendChild(resultElement);

// Create Loop Word
let loopWord: string = "";

// EventListener for Button Click
newButtonElement.addEventListener("click", () => {
  createLoopWord();
  resultElement.textContent = loopWord;
});

// Function to Create Loop Word
function createLoopWord() {
  let input: number = parseInt(newInputElement.value);
  if (isNaN(input) || input <= 0) {
    alert("Please insert an integer number");
    return;
  } else {
    let oString: string = "";
    for (let i = 0; i < input; i++) {
      oString += "o";
    }
    loopWord = `L${oString}p`;
  }
  return loopWord;
}

// - ======================= LEVEL 3_1 =========================
// - ======================= LEVEL 3_2 =========================
// - ======================= LEVEL 3_3 =========================
