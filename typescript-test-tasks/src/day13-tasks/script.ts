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
// - ====================== LEVEL 2_2 =======================
// - ====================== LEVEL 2_4 =======================

// ! =================== DOM EVENTS TASKS =================
// - ====================== LEVEL 3_1 =======================
