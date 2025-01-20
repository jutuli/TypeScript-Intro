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
// - ======================== LEVEL 1_3 ========================
// - ======================== LEVEL 2_1 ========================
