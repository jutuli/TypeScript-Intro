// - =================== LEVEL 1_1 ===================
// Erstelle eine Datei script.ts
// Binde patient-waiter.ts ein

import { waitForTwoSeconds, waitForTwoSecondsPromise } from "./patient-waiter";

async function main() {
  console.log("Hi, here I am ...");
  waitForTwoSeconds();
  console.log("Hello...");
  console.log("Can you hear me?");
}

main();

// Lege eine asynchrone Funktion mit dem Namen main an
// Schreibe in der Funktion auf die Konsole “Hi, here I am…”
// Rufe dann waitForTwoSeconds auf ohne zu warten (ohne await)
// Schreibe danach auf die Konsole “Hello…”
// Schreib danach auf die Konsole “Can you hear me…”
// Rufe main() auf
// Schau dir in der Ausgabe an, wann was geloggt wird

// - =================== LEVEL 1_2 ===================
// Jetzt soll auf die Ausführung von waitForTwoSeconds gewartet werden
//? => dafür muss waitForTwoSeconds in ein Promise umgewandelt werden (siehe patient-waiter.ts)
// Nutze das Schlüsselwort await an der richtigen Stelle in der Funktion main
// Schau dir nun die Reihenfolge in der Ausgabe an

async function main2() {
  console.log("Hi, here I am ...");
  await waitForTwoSecondsPromise();
  console.log("Hello...");
  console.log("Can you hear me?");
}

main2();
