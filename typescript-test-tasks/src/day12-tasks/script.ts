// ! =================== DOM ELEMENTS TASKS =================
// - ====================== LEVEL 1_1 =======================
//Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
//Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.

// Elemente holen
const inputElement = document.querySelector<HTMLInputElement>("#inputText");
const buttonElement = document.querySelector<HTMLButtonElement>("button");
const unorderedListElement = document.querySelector("#myList");

// Item zur Liste hinzufügen nach Button Click
buttonElement?.addEventListener("click", () => {
  if (inputElement && buttonElement && unorderedListElement) {
    let input = inputElement.value;
    const liElement = document.createElement("li");
    liElement.textContent = input;
    unorderedListElement.appendChild(liElement);
    //Das Input-Feld soll nach jedem Hinzufügen geleert werden.
    inputElement.value = "";
  }
});

// - ====================== LEVEL 1_2 =======================
// - ====================== LEVEL 2_3 =======================
// - ====================== LEVEL 2_7 =======================

// ! ====================== DOM TS TASKS ====================
// - ====================== LEVEL 1_2 =======================
// - ====================== LEVEL 1_3 =======================
// - ====================== LEVEL 1_4 =======================
// - ====================== LEVEL 1_5 =======================
