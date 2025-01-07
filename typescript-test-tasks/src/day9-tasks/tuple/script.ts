//- ==================== LEVEL 1_1 =====================
// Erstelle ein Tuple names starWarsActor vom Typ string, string
// die beiden Werte sind “Luke Skywalker”, “Mark Hamill”
type starWarsTuple = [string, string];
const starWarsActor: starWarsTuple = ["Luke Skywalker", "Mark Hamill"];
console.log(starWarsActor);

// Erstelle jetzt ein Array von diesen Tupeln, das mehrere StarWars-Schauspieler:innen enthält
const starWarsCast: starWarsTuple[] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
];

// Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben, z. B. “Mark Hamill spielt Luke Skywalker” etc.
starWarsCast.forEach(([role, actor]) => {
  console.log(`${role} wird gespielt von ${actor}.`);
});

//- ==================== LEVEL 2_1 =====================
