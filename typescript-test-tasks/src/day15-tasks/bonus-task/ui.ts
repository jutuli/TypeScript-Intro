// Erstelle die Buttons A-Z mit Hilfe eines Loops.
// Erstelle ein Input-Feld, mit dem der/die User:in einen Schwierigkeitsgrad wählen kann.
// Erstelle die Anzahl der Versuche aus der Länge des Wortes.

// Parent-Container holen
const parentContainer = document.body;

// Input-Feld für die Auswahl des Schwierigkeitsgrads

export const createDifficultySelect = (): HTMLSelectElement => {
  const difficultySelect = document.createElement("select");
  const easyDifficulty = document.createElement("option");
  const difficultDifficulty = document.createElement("option");
  easyDifficulty.textContent = "Easy";
  easyDifficulty.setAttribute("value", "easy");
  difficultDifficulty.textContent = "Difficult";
  difficultDifficulty.setAttribute("value", "difficult");
  difficultySelect.appendChild(easyDifficulty);
  difficultySelect.appendChild(difficultDifficulty);
  parentContainer.appendChild(difficultySelect);
  return difficultySelect;
};

// Anzeige der Maximalanzahl von Versuchen
export const createMaxAttempts = (attempts: number): void => {
  const maxAttemptsElement = document.createElement("p");
  maxAttemptsElement.textContent = `Du hast ${attempts} Versuche.`;
  maxAttemptsElement.setAttribute("id", "max-attempts");
  parentContainer.appendChild(maxAttemptsElement);
};

// Counter erstellen mit Anzahl der bereits getätigten Versuche
export const createCounter = (): HTMLElement => {
  const counterElement = document.createElement("p");
  parentContainer.appendChild(counterElement);
  return counterElement;
};

// Alphabet als Variable anlegen
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// für jeden Buchstaben im Alphabet einen Button anlegen
export const createAlphabetButtons = (): HTMLButtonElement[] => {
  const buttons: HTMLButtonElement[] = [];
  for (const character of alphabet) {
    const button = document.createElement("button");
    button.textContent = character;
    button.className =
      "aspect-square w-10 rounded-md border bg-sky-800 font-bold text-white disabled:bg-sky-200";
    button.setAttribute("value", character);
    parentContainer.appendChild(button);
    buttons.push(button);
  }
  return buttons;
};

// für die Wortlänge des zu erratenden Worts Striche angeben
export const createHangmanLines = (numberOfCharacters: number): string => {
  const lines = "_ ".repeat(numberOfCharacters);
  const hangmanLinesElement = document.createElement("p");
  hangmanLinesElement.setAttribute("id", "hangman-lines");
  parentContainer.appendChild(hangmanLinesElement);
  hangmanLinesElement.textContent = lines;
  return lines;
};

// HangmanLines updaten, wenn Buchstabe gefunden wird
export const updateHangmanLines = (
  word: string,
  guessedLetter: string,
  currentLines: string,
): string => {
  const updatedLines = currentLines.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === guessedLetter) {
      updatedLines[i] = guessedLetter;
    }
  }
  const newLines = updatedLines.join(" ");
  const hangmanElement = document.querySelector("#hangman-lines");
  if (hangmanElement) {
    hangmanElement.textContent = newLines;
  }
  return newLines;
};
