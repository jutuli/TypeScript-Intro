// Zähle die Runde nur hoch, wenn der/die User:in einen falschen Buchstaben gewählt hat.
// Wenn der/die User:in einen falschen Buchstaben ausgewählt hat wird dieser Button ausgegraut.

import {
  createAlphabetButtons,
  createDifficultySelect,
  createCounter,
  createMaxAttempts,
  createHangmanLines,
  updateHangmanLines,
} from "./ui";
import words from "./words";

// Schwierigkeit-Dropdown erstellen
const difficultySelect = createDifficultySelect();

// Alphabet-Buttons erstellen
const buttons = createAlphabetButtons();

// Counter erstellen und auf 0 initialisieren
const counterElement = createCounter();
let counter = 0;
// Updaten des Counters
const updateCounter = () => {
  counter++;
  counterElement.textContent = `Bisherige Versuche: ${counter}`;
};

// Auswahl eines zufälligen Worts
const chooseRandomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  const randomWord = words[index];
  console.log(randomWord);
  return randomWord;
};

// Zufälliges Wort in neuer Variable speichern
const randomWord = chooseRandomWord();

// HangmanLines erstellen

let hangmanLines = createHangmanLines(randomWord.length);

// maxAttempts Standard ist auf Easy und damit auf Länge des Worts
let maxAttempts: number = randomWord.length;

// Maximale Versuche in DOM anzeigen lassen
createMaxAttempts(maxAttempts);

// falls difficultySelect auf Difficult gestellt wird, dann wird maxAttempts halbiert
difficultySelect.addEventListener("change", () => {
  if (difficultySelect.value === "difficult") {
    maxAttempts = Math.ceil(randomWord.length / 2);
    document.querySelector("#max-attempts")?.remove();
    createMaxAttempts(maxAttempts);
  } else {
    maxAttempts = randomWord.length;
    document.querySelector("#max-attempts")?.remove();
    createMaxAttempts(maxAttempts);
  }
});

// Buttonauswahl mit RandomWord vergleichen
const playHangman = () => {
  // Event-Listener für den Button-Klick
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      // Nach Klick wird Button disabled
      button.disabled = true;
      if (randomWord.toUpperCase().includes(button.value)) {
        // Falls Buchstabe gefunden, wird er ausgegeben
        console.log(button.value, " wurde gefunden");
        const updatedHangmanLines = updateHangmanLines(
          randomWord,
          button.value,
          hangmanLines
        );
        hangmanLines = updatedHangmanLines;
        if (!hangmanLines.includes("_")) {
          window.alert("Herzlichen Glückwunsch! Du hast das Wort erraten!");
        }
      } else {
        updateCounter();

        if (counter >= maxAttempts) {
          window.alert("Du hast verloren. Du hast alle Versuche aufgebraucht.");
        }
      }
    })
  );
};

playHangman();
