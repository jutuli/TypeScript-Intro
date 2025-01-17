//- ====================== TASK LEVEL 2_2 ===================
// Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen.

// Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten.
// Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau.
// Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00).
enum ClothingColor {
  GELB = "#fcff33",
  ORANGE = "#ffa92d",
  PINK = "#ff4def",
  BLAU = "#1a39fe",
  LILA = "#9510ec",
  GRAU = "#808080",
}

// Lege dir ein Array mit allen Farben an: allColors: ClothingColor[]

const allColors: ClothingColor[] = [
  ClothingColor.GELB,
  ClothingColor.ORANGE,
  ClothingColor.PINK,
  ClothingColor.BLAU,
  ClothingColor.LILA,
  ClothingColor.GRAU,
];

// alternativ:
const allColors2: ClothingColor[] = Object.values(ClothingColor);

// Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe .

export function createButtons() {
  console.log(allColors);
  console.log(allColors2);
  for (let color of allColors) {
    const button = document.createElement("button");
    button.textContent = `Button No.${allColors.indexOf(color) + 1}`;
    button.style.backgroundColor = color;
    document.querySelector("#task-2-2")?.appendChild(button);
  }
}
