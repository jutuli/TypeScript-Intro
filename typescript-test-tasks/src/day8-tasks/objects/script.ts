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

// Nutze forEach, um nur die Größen aller Äpfel in der Konsole auszugeben
apples.forEach((apple) => console.log(apple.size));

// Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
apples.forEach((apple) => {
  console.log(apple.color);
});

// Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
console.log(apples.length);

// Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples Array
const pinkApple: Apple = {
  color: "pink",
  size: "medium",
  isSweet: true,
};

apples.push(pinkApple);

console.log(apples);

// - ===================== LEVEL 1_4 ======================
// Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
// Lasse dir einmal alle Hundenamen anzeigen.
// Ändere folgende Werte: Droopy in Snoppy & Dinky in Pinky
// Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
// Füge das Objekt im Array hinzu

type Pet = {
  tiertyp: string;
  namen: string[];
};

const unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

// Lasse dir einmal alle Hundenamen anzeigen.
console.log(unsereHaustiere[1].namen);

// Ändere folgende Werte: Droopy in Snoppy & Dinky in Pinky
unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere[0].namen);

unsereHaustiere[1].namen[2] = "Snoopy";
console.log(unsereHaustiere[1].namen);

const hamster: Pet = {
  tiertyp: "Hamster",
  namen: ["Itsy", "Bitsy", "Spider"],
};

unsereHaustiere.push(hamster);
console.log(unsereHaustiere);

// - ===================== LEVEL 1_5 ======================
//Verwende den vorgegebenen Code: den Typ Lager und ein Objekt vom Typ Lager
//Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus: Geheimnisse, Cola, Hefter

type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

const unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

//Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus: Geheimnisse, Cola, Hefter
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schreibtisch.schublade);

// - ===================== LEVEL 1_6 ======================

// - ===================== LEVEL 2_2 ======================
