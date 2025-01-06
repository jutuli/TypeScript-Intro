// - ===================== LEVEL 1_3 ======================
// Im vorgegebenen Code findest du einen type Apple, drei Objekte vom Typ Apple und ein Array mit allen Äpfeln
// Nutze forEach, um nur die Größen aller Äpfel in der Konsole auszugeben
// Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
// Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
// Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples Array
// Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu
// Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

const redApple: Apple = { color: "red", size: "big", isSweet: true };
const greenApple: Apple = { color: "green", size: "small", isSweet: false };
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: false };
const apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach((apple) => console.log(apple.size));

apples.forEach((apple) => {
  console.log(apple.color);
});

console.log(apples.length);

const pinkApple: Apple = {
  color: "pink",
  size: "medium",
  isSweet: true,
};

apples.push(pinkApple);
console.log(apples);

// - ===================== LEVEL 1_4 ======================

// - ===================== LEVEL 1_5 ======================

// - ===================== LEVEL 1_6 ======================

// - ===================== LEVEL 2_2 ======================
