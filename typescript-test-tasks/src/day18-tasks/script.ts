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
// Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.
// Schau dir dazu auch nochmal die Dokumentation von window.navigator an
// Hole dir die Informationen über den Browser wie folgt:
// Browsername
// Betriebssystem-Architektur
// Browser-Version
// Window Auflösung
// Innenhöhe und -breite des Dokuments
// colorDepth
// pixelDepth

function getData() {
  // Section-Element holen
  const sectionElement = document.querySelector(".task1-3");
  // falls Section-Element nicht existiert, aus Funktion returnen
  if (!sectionElement) return;

  // Data-Objekt anlegen
  const data = {
    // Browsername
    Browsername: window.navigator.appName,
    // Betriebssystem
    Betriebssystem: window.navigator.platform,
    // Browser Version
    Browserversion: window.navigator.userAgent,
    // Window-Auflösung
    "Window-Aufloesung": window.navigator.userAgent,
    // Dokumentenhöhe
    Dokumentenhoehe: window.innerHeight,
    // Dokumentenbreite
    Dokumentenbreite: window.innerWidth,
    // Color Depth
    "Color Depth": window.screen.colorDepth,
    // Pixel Depth
    "Pixel Depth": window.screen.pixelDepth,
  };

  // Über Data-Objekt-Entries iterieren und Paragraph-Elemente anlegen
  Object.entries(data).forEach(([key, value]) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = `${key}: ${value}`;
    sectionElement.appendChild(paragraphElement);
  });
}

// Funktion getData wird auf Button-Click ausgeführt
document.querySelector("#get-data-btn")?.addEventListener("click", getData);

// - ======================== LEVEL 2_1 ========================
// Schreibe eine Function, die beim Laden der Seite die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// Nutzen kannst du:
// setInterval()
// clearInterval()
// getElementsByClassName() oder getElementById()
// if/else if.

window.onload = () => {
  const count = document.querySelector("#count");
  const message = document.querySelector(".message");
  const section = document.querySelector(".task2-1");
  let seconds = 10;
  if (!count || !message || !section) return;
  const timer = setInterval(() => {
    if (seconds === 0) {
      section.removeChild(message);
      clearInterval(timer);
    } else {
      count.textContent = seconds.toString();
      seconds--;
    }
  }, 1000);
};

// - ======================== LEVEL 3_2 ========================
// Schreibe eine Function, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.
// HTML und CSS ist vorgegeben (siehe Code-Snippet).
// Nutze unter Anderem:
// setInterval()
// clearInterval()
// if-Statements.

// Get Required Elements
const timeDisplay = document.querySelector("#time");
const minuteInput = document.querySelector<HTMLInputElement>("#minutes");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const restartButton = document.querySelector("#restart-button");

function createCountdown(): void {
  if (
    !timeDisplay ||
    !minuteInput ||
    !startButton ||
    !pauseButton ||
    !restartButton
  )
    return;

  // Remaining Seconds & IntervalId auf 0 initialisieren, um Abgleich und späteres Löschen/Überschreiben zu ermöglichen
  let remainingSeconds: number = 0;
  let intervalId: number = 0;
  //InputValue auslesen und in Sekunden umrechnen (falls kein Input wird 1 Minute gesetzt)
  const inputValue = parseInt(minuteInput.value) || 1;
  const initialSeconds = inputValue * 60;

  // Countdown starten
  startButton.addEventListener("click", () => {
    //mehrfaches Starten vermeiden
    if (intervalId !== 0) return;
    // Start des Countdowns setzen (wenn kein Zahlen-Input, dann 1 Minute) falls es nicht das Weiterlaufen des Countdowns ist (also remainingSeconds > 0 ist)
    if (remainingSeconds === 0) {
      remainingSeconds = initialSeconds;
    }

    // Display initial setzen
    updateDisplay();
    // Countdown starten
    intervalId = setInterval(() => {
      // wenn Zeit abgelaufe, Countdown stoppen
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        intervalId = 0;
      } else {
        remainingSeconds--;
        updateDisplay();
      }
    }, 1000);
  });

  // Aktualisieren der Countdown-Anzeige
  const updateDisplay = () => {
    const minutes: number = Math.floor(remainingSeconds / 60);
    const seconds: number = remainingSeconds % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Countdown unterbrechen
  pauseButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = 0;
  });

  // Countdown zurücksetzen auf initialen Wert -> Neustart dann mit erneutem Klick auf Start-Button
  restartButton.addEventListener("click", () => {
    clearInterval(intervalId);
    // remainingSeconds auf initialen Inputwert zurücksetzen
    remainingSeconds = initialSeconds;
    updateDisplay();
  });
}

createCountdown();
