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

// ! =================== DOM EVENTS TASKS =================
// - ====================== LEVEL 3_1 =======================
