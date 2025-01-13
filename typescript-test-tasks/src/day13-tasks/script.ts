// ! =================== DOM ELEMENTS TASKS =================
// - ====================== LEVEL 1_3 =======================

// Schreibe eine Function, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze:
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
// innerHTML
// querySelectorAll
// querySelector
// addEventListener

// Elemente holen
const buttonElements =
  document.querySelectorAll<HTMLButtonElement>(".btn-task-1-3");
const outputElement = document.querySelector<HTMLOutputElement>("output");
const myList = document.querySelector<HTMLUListElement>("#myList");

if (buttonElements && outputElement && myList) {
  //  UpdateOutput-Funktion
  function updateOutput(outputText: string) {
    if (outputElement) {
      outputElement.textContent = outputText;
    }
  }
  // EventListener auf die einzelnen Buttons setzen
  [...buttonElements][0].addEventListener("click", () => {
    const outputText =
      // mit ? wird Fehler vermieden, falls firstElementChild null oder undefined
      myList.firstElementChild?.textContent ||
      // Falls textContent null, oder undefined, wird "Im Element ist kein Text vorhanden" als Textcontent verwendet
      "Im Element ist kein Text vorhanden";
    updateOutput(outputText);
  });
  [...buttonElements][1].addEventListener("click", () => {
    const outputText =
      myList.lastElementChild?.textContent ||
      "Im Element ist kein Text vorhanden";
    updateOutput(outputText);
  });
  [...buttonElements][2].addEventListener("click", () => {
    const outputText =
      myList.firstElementChild?.nextElementSibling?.textContent ||
      "Im Element ist kein Text vorhanden";
    updateOutput(outputText);
  });
  [...buttonElements][3].addEventListener("click", () => {
    const outputText =
      myList.lastElementChild?.previousElementSibling?.textContent ||
      "Im Element ist kein Text vorhanden";
    updateOutput(outputText);
  });
}

// - ====================== LEVEL 1_9 =======================
// Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// Nutze:
// addEventListener() für den Klick auf den Button
// selectedIndex() um dir das ausgewählte Element aus dem Select zu holen
// remove()um über den Index das Element zu löschen

// Elemente holen
const selectElement =
  document.querySelector<HTMLSelectElement>("#farbeAuswaehlen");
const buttonElement = document.querySelector<HTMLButtonElement>("#button-1-9");

if (selectElement && buttonElement) {
  buttonElement.addEventListener("click", (e) => {
    // kein Neuladen der Seite durch Button in Form via preventDefault
    e.preventDefault();
    // den selectedIndex von selectElement auf selectElement entfernen
    selectElement.remove(selectElement.selectedIndex);
  });
}
// - ====================== LEVEL 2_2 =======================
// Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.

// Elemente holen
const firstNameElement = document.querySelector<HTMLInputElement>("#vorname");
const lastNameElement = document.querySelector<HTMLInputElement>("#nachname");
const countryElement = document.querySelector<HTMLSelectElement>("#land");
const submitElement = document.querySelector<HTMLInputElement>(
  "input[type='submit']"
);

if (submitElement && firstNameElement && lastNameElement && countryElement) {
  submitElement.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(firstNameElement.value);
    console.log(lastNameElement.value);
    console.log(countryElement.value);
    // Definiere einen Typ SimplePerson
    type SimplePerson = {
      firstName: string;
      lastName: string;
      country: string;
    };

    // Lege jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält
    const myPerson: SimplePerson = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      country: countryElement.value,
    };

    // Lass dir das Objekt auf der Konsole ausgeben
    console.log(myPerson);
  });
}

// - ====================== LEVEL 2_4 =======================
// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund der <section> anwendet.
// Verwende folgende Befehle für die Aufgabe:
// addEventListener(“click”)
// event.preventDefault();
// .value oder [selectedIndex].
// Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

// Elemente holen
const sectionElement = document.querySelector<HTMLElement>("#task-2-4");
const colorChoiceSelectElement =
  document.querySelector<HTMLSelectElement>("#colorChoice");
const colorSubmitButton =
  document.querySelector<HTMLButtonElement>("#button-2-4");

// EventListener auf Button
if (sectionElement && colorChoiceSelectElement && colorSubmitButton) {
  colorSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedColor = colorChoiceSelectElement.value
      // Leerzeichen entfernen & alles kleingeschrieben um als CSS-BackgroundColor zu gelten
      .replaceAll(" ", "")
      .toLowerCase();
    console.log(selectedColor);
    sectionElement.style.backgroundColor = selectedColor;
  });
}

// ! =================== DOM EVENTS TASKS =================
// - ====================== LEVEL 3_1 =======================
// Du sollst nochmal Funktionen schreiben, die die Hintergrundfarbe der Seite verändert.

//- 1. Ändere die Hintergrundfarbe, wenn auf einen Button geklickt wird.

// Elemente holen
const sectionBackgroundElement =
  document.querySelector<HTMLElement>("#task-3-1");
const pinkButton = document.querySelector<HTMLButtonElement>("#pink-button");
const purpleButton =
  document.querySelector<HTMLButtonElement>("#purple-button");
const orangeButton =
  document.querySelector<HTMLButtonElement>("#orange-button");

// UpdateBackgroundColor Funktion erstellen
function updateBackgroundColor(color: string) {
  if (sectionBackgroundElement) {
    sectionBackgroundElement.style.backgroundColor = `${color}`;
  }
}

// Nutze let count = 0; (global variable).
let count: number = 0;
// Anlegen des CounterElements + UpdateCounter Funktion
const counterElement = document.createElement("p");
sectionBackgroundElement?.appendChild(counterElement);

function updateCounter(count: number) {
  if (counterElement && sectionBackgroundElement) {
    counterElement.textContent = `Die Farbe wurde ${count} x geändert`;
  }
}
// Änderung der BackgroundColor bei Button-Klick auf Rosa, Lila oder Orange

pinkButton?.addEventListener("click", () => {
  updateBackgroundColor("pink");
  updateCounter(++count);
});
purpleButton?.addEventListener("click", () => {
  updateBackgroundColor("purple");
  updateCounter(++count);
});
orangeButton?.addEventListener("click", () => {
  updateBackgroundColor("orange");
  updateCounter(++count);
});

//- 2. Ändere die Hintergrundfarbe, wenn die Regler verschoben werden in den jeweiligen Farbwert.

// Zusätzliche Elemente holen
const redColorInput = document.querySelector<HTMLInputElement>("#red-slider");
const greenColorInput =
  document.querySelector<HTMLInputElement>("#green-slider");
const blueColorInput = document.querySelector<HTMLInputElement>("#blue-slider");

// Initialisieren einer BackgroundColor-Variable mit RGB-Werten:
let colorArray: number[] = [255, 255, 255];

// Funktion zum Updaten der RGB-Farbe
function getNewColor(): string {
  return `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;
}

// Änderung der BackgroundColor bei Verschieben eines Reglers
if (redColorInput && greenColorInput && blueColorInput) {
  //Regler-Änderung von Rot
  redColorInput.addEventListener("change", () => {
    // Update des R-Werts im colorArray
    colorArray[0] = Number(redColorInput.value);
    // Aufruf der getNewColor Funktion zum zuweisen des RGB-Werts
    const newColor = getNewColor();
    updateBackgroundColor(newColor);
    // Counter updaten
    updateCounter(++count);
  });

  //Regler-Änderung von Grün
  greenColorInput.addEventListener("change", () => {
    // Update des G-Werts im colorArray
    colorArray[1] = Number(greenColorInput.value);
    // Aufruf der getNewColor Funktion zum zuweisen des RGB-Werts
    const newColor = getNewColor();
    updateBackgroundColor(newColor);
    // Counter updaten
    updateCounter(++count);
  });

  //Regler-Änderung von Blau
  blueColorInput.addEventListener("change", () => {
    // Update des R-Werts im colorArray
    colorArray[2] = Number(blueColorInput.value);
    // Aufruf der getNewColor Funktion zum zuweisen des RGB-Werts
    const newColor = getNewColor();
    updateBackgroundColor(newColor);
    // Counter updaten
    updateCounter(++count);
  });
}
