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
// Erstelle eine Variable mit einem Text (siehe Code-Snippet).

// Code Snippet:
const text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

// Erstelle eine Function, die den Text in einem Abstand von 100 Zeichen trennt.
function splitInBlocksOf100(text: string) {
  // Erstelle in der Function ein Array textInBlocksOfHundred: string []
  let textInBlocksOfHundred: string[] = [];
  // Nutze dort eine Schleife
  let totalRows: number = Math.ceil(text.length / 100);
  for (let i = 0; i < totalRows; i++) {
    let textBlockStart: number = i * 100;
    let textBlockEnd: number = textBlockStart + 100;
    let textBlock = text.substring(textBlockStart, textBlockEnd);
    // Füge immer nach den 100 Zeichen des Textes " - 1 of [Gesamtzahl der Zeilen]", " - 2 of  [Gesamtzahl der Zeilen]" usw. hinzu.
    textBlock = textBlock.concat(`- ${i + 1} of ${totalRows}`);
    // Pushe jede dieser Zeilen in das Array textInBlocksOfHundred
    textInBlocksOfHundred.push(textBlock);
  }
  // Gib nach der Schleife das Array aus der Funktion zurück
  return textInBlocksOfHundred;
}

// Rufe die Funktion mit der Variable aus dem Code-Snippet als Argument auf.
splitInBlocksOf100(text);

// Lass dir das Ergebnis auf der Konsole ausgeben
console.log(splitInBlocksOf100(text));

// - ======================= LEVEL 3_2 =========================
// - ======================= LEVEL 3_3 =========================
