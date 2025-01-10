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
// Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
const buttonElement1 =
  document.querySelector<HTMLButtonElement>("button.example");
const exampleElements = document.querySelectorAll(".example");

buttonElement1?.addEventListener("click", () => {
  for (const element of exampleElements) {
    element.classList.toggle("style");
  }
});

// - ====================== LEVEL 2_3 =======================
// Schreibe eine Function, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert. Nutze die getElementsByTagName-Methode
// Nutze folgende Farben:
// #f6c89f
// #ffe7d1
// #4b8e8d
// #396362
// #666
// #333

// - ====================== LEVEL 2_7 =======================

// ! ====================== DOM TS TASKS ====================
// - ====================== LEVEL 1_2 =======================
// Hole dir mit document.getElementById(“info”) das Element und nutze dann .innerHTML

const infoContainer = <HTMLDivElement>document.getElementById("info");
// Erstelle eine h1 mit dem Text “Hello World”.
if (infoContainer) {
  infoContainer.innerHTML = "<h1>Hello World</h1>";
  // Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis im Browser an.
  infoContainer.innerHTML += "<h2>How are you?</h2>";
  // Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein.
  infoContainer.innerHTML += "<div id='container'></div>";
  // Nutze wieder document.getElementById('container')
  const container = document.getElementById("container");
  // Erstelle einen <p>-Tag mit dem Text “This is a paragraph” und füge ihn zum container hinzu
  if (container) {
    container.innerHTML = "<p>This is a paragraph</p>";
    // Füge ein weiteres Element vom Typ input hinzu. Das Input-Element soll vom Typ text sein
    container.innerHTML += "<input id='input'></input>";
    const input = document.getElementById("input");
    input?.setAttribute("type", "text");
  }
}
// - ====================== LEVEL 1_3 =======================
// - ====================== LEVEL 1_4 =======================
// - ====================== LEVEL 1_5 =======================
