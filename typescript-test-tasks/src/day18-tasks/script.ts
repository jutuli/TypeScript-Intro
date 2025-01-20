// - ======================== LEVEL 1_1 ========================
// Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.

function showText(text: string): void {
  setTimeout(() => console.log(text), 200);
}

showText("Dies ist ein Text.");

// Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.

let counter: number = 10;
function countdown(): void {
  const timer = setInterval((): void => {
    if (counter === 10) {
      console.log("Start: Warten für 3 Sekunden.");
    } else if (counter === 8) {
      console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
    } else if (counter === 0) {
      console.log("Endlich Feierabend.");
      clearInterval(timer);
      return;
    } else {
      console.log(counter);
    }
    counter--;
  }, 1000);
}

countdown();

// - ======================== LEVEL 1_2 ========================
// Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// HTML und CSS ist vorgegeben (siehe Code-Snippet).
// Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().

document.querySelector("#btn")?.addEventListener("click", () => {
  const zeitElement = document.querySelector(".zeit");
  let zeit = 100;
  const timer = setInterval(() => {
    if (zeitElement && zeit >= 0) {
      zeitElement.textContent = `${zeit}%`;
      zeit--;
    } else {
      clearInterval(timer);
    }
  }, 100);
});

// - ======================== LEVEL 1_3 ========================
// - ======================== LEVEL 2_1 ========================
