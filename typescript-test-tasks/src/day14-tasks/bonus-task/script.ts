let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];

// Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann.
function translateToMorse(text: string): string {
  let textArray: string[] = [];
  // Für jeden Character im Text wird das textArray um den Character in Großbuchstaben verlängert
  for (let i = 0; i < text.length; i++) {
    textArray.push(text.charAt(i).toUpperCase());
  }

  // für jedes Element im textArray wird geprüft, ob ein Äquivalent im morseAlphabet vorhanden ist und wenn ja, wird davon der Buchstabe ins morseArray eingefügt
  const morseArray: string[] = textArray.map((character) => {
    const morseMatch =
      morseAlphabet.find((element) => element.letter === character)
        ?.morseCode || "";
    return morseMatch;
  });

  // Übersetzen des morseArrays in einen String
  const morseOutput: string = [...morseArray].toString();
  return morseOutput;
}

// Input-Text verarbeiten & Übersetzung in Output-Element schreiben
document
  .querySelector<HTMLButtonElement>("#text-submit")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    const textInput = document.querySelector<HTMLInputElement>("#text-input");
    const textOutputElement =
      document.querySelector<HTMLParagraphElement>(".output");
    if (!textInput || !textOutputElement) return;
    textOutputElement.textContent = translateToMorse(textInput.value);
  });
