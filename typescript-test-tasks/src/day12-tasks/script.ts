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

// Button holen
const changeButton =
  document.querySelector<HTMLButtonElement>("#change-button");

if (changeButton) {
  changeButton.addEventListener("click", () => {
    const homeElements = document.getElementsByTagName("li");
    // BackgroundColor Change der Menu-Items
    homeElements[0].style.backgroundColor = "#f6c89f";
    homeElements[1].style.backgroundColor = "#ffe7d1";
    homeElements[2].style.backgroundColor = "#4b8e8d";

    // Schriftfarbe ändern für Menu-Items + Button
    [...homeElements].forEach((element) => (element.style.color = "#666"));
    changeButton.style.color = "#666";
  });
}
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
// Erstelle im Code drei <figure> -Elemente für eine Galerie.
//Sie sollen Child-Element der section “gallery” sein

const galleryElement = document.querySelector("#gallery");
const figure1 = document.createElement("figure");
const figure2 = document.createElement("figure");
const figure3 = document.createElement("figure");

if (galleryElement) {
  galleryElement.appendChild(figure1);
  galleryElement.appendChild(figure2);
  galleryElement.appendChild(figure3);

  figure1.innerHTML =
    "<img src='https://fastly.picsum.photos/id/674/200/200.jpg?hmac=8R8yi_1uaRGCT1W62tjUJFrEyMy2JCZzmrjrXclOens' alt='Grapes'></img>";
  figure2.innerHTML =
    "<img src='https://fastly.picsum.photos/id/493/200/200.jpg?hmac=gTkCS4bzTaN0S0X4DVmbvEYkY0QxwyorqWjnxVNHtgg' alt='Strawberry Yogurt'></img>";
  figure3.innerHTML =
    "<img src='https://fastly.picsum.photos/id/17/200/200.jpg?hmac=9QDzoqdXorZialFww894D6BqJGalCXFLX2zNQtYENEA' alt='Path in the Woods'></img>";

  figure1.innerHTML += "<figcaption>fig 1</figcaption";
  figure2.innerHTML += "<figcaption>fig 2</figcaption";
  figure3.innerHTML += "<figcaption>fig 3</figcaption";
}

// - ====================== LEVEL 1_4 =======================
// Erstelle ein Input-Feld und einen Button im HTML.
const sectionElement = document.querySelector("#ts-1-4");
const inputField = document.createElement("input");
const addButton = document.createElement("button");
if (sectionElement) {
  sectionElement.appendChild(inputField);
  sectionElement.appendChild(addButton);
  inputField.setAttribute("placeholder", "hier noch etwas");
  addButton.textContent = "Text hinzufügen";

  // Erstelle eine Function, die die Eingabe aus einem Textfeld ausliest und dann diesen Text mit dem aktuellen Zeitstempel (nutze dafür new Date()) im HTML-Dokument anzeigt.
  // Die Funktion soll aufgerufen werden, wenn auf den Button “Text hinzufügen” geklickt wird
  addButton.addEventListener("click", function createTextWithDate() {
    // debugger;
    const inputText: string = inputField.value;
    const outputText: string = `${new Date()}: ${inputText}`;
    // Verwende .innerHTML, um dort jeweils den Text und das Datum hinzuzufügen
    const outputElement = document.createElement("div");
    sectionElement.appendChild(outputElement);
    outputElement.innerHTML = `<p>${outputText}</p>`;
    console.log(outputText);
    inputField.value = "";
    // Alternative zu outputElement.innerHTML:
    // const outputElement = document.createElement("p");
    // outputElement.textContent = outputText;
    // sectionElement!.appendChild(outputElement); // hier kann ich mit ! arbeiten, da ich über if(sectionElement) bereits prüfe, ob es vorhanden ist
  });
}

// - ====================== LEVEL 1_5 =======================
//Schreibe eine Function showURL(), die ausgeführt wird, wenn du auf den Button "Zeige mir die URL!" klickst.
const sectionTs15 = document.querySelector("#ts-1-5");
const urlButtonElement =
  document.querySelector<HTMLButtonElement>("#url-button");

urlButtonElement?.addEventListener(
  "click",
  function showURL() {
    const currentUrl = window.location.href;
    const urlOutput = document.createElement("p");
    urlOutput.textContent = currentUrl;
    if (sectionTs15) {
      sectionTs15.appendChild(urlOutput);
    }
  }
  //Filtere über die Function die URL der Seite heraus und lasse sie dir unterhalb des Buttons anzeigen.
);
