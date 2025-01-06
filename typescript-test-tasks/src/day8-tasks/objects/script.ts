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
// Greife auf folgende Werte dieses Objekts zu und lasse sie dir auf der Konsole ausgeben:
// "The Beatles"
// aus dem Objekt Pink Floyd: "Download"
// aus dem Objekt Pink Floyd: true
// die Releasejahre: 1971 und 1983
// Von Metallica: "MC"
// aus dem Objekt  Metallica das Wort: "Ride"
// Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

const meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill 'Em All and Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// "The Beatles"
console.log(meineTopVier[0].kunstler);

// aus dem Objekt Pink Floyd: "Download"
console.log(meineTopVier[1].formate[3]);

// aus dem Objekt Pink Floyd: true
console.log(meineTopVier[1].gold);

// die Releasejahre: 1971 und 1983
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);

// Von Metallica: "MC"
console.log(meineTopVier[3].formate[2]);

// aus dem Objekt  Metallica das Wort: "Ride"
console.log(meineTopVier[3].title.slice(17, 21));

// Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.
const meineZusatzmusik: Musik = {
  kunstler: "DJ Bobo",
  title: "Everybody",
  release_jahr: 1993,
  formate: ["LP", "CD", "MC", "Download"],
  gold: false,
};

meineTopVier.push(meineZusatzmusik);
console.log(meineTopVier);

// - ===================== LEVEL 2_2 ======================
// Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.
// Sortiere die Bands aus dem Code-Snippet alphabetisch nach Namen.
// Sortiere anschließend die Bands aufsteigend nach dem Karrierebeginn (period_active.start).

type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const sortedSingers = [...singers].sort((singerA: Singer, singerB: Singer) => {
  return singerA.name.localeCompare(singerB.name);
});
console.log(sortedSingers);

const sortedPeriodActive = [...singers].sort(
  (singerA: Singer, singerB: Singer) =>
    singerA.period_active["start"] - singerB.period_active["start"]
);

console.log(sortedPeriodActive);
