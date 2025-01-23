// - =================== LEVEL 1_1 ===================
// Erstelle eine Funktion waitForTwoSeconds
// Die Funktion soll asynchron aufrufbar sein, d. h. sie soll einen Promise<void> zurückgeben
// Exportiere die Funktion

export function waitForTwoSeconds() {
  setTimeout(() => {
    console.log("Thank you for your patience.");
  }, 2000);
}

export function waitForTwoSecondsPromise(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Thank you for your patience.");
      resolve();
    }, 2000);
  });
}
