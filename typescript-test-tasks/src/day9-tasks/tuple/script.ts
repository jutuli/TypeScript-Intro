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
// Wir wollen eine Mitarbeitendenverwaltung auf Basis eines Arrays erstellen
// Dabei wollen wir im Array den Datentyp Tuple verwenden
// Ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)

type employeeTuple = [
  // ? Labels wie num, name, department, salary verbessern die Lesbarkeit
  // ? eher nur bei kleinen, festen und gut zu verstehenden Datenstrukturen anwenden
  num: number,
  name: string,
  department: string,
  salary: number
];

// Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält

const employeeOverview: employeeTuple[] = [
  [1, "John Doe", "Marketing", 55000],
  [2, "Jane Doe", "Sales", 92800],
  [3, "Sarah Morris", "Human Resources", 74000],
  [4, "Mike Morris", "Finance", 80500],
  [5, "Anna Fromm", "Marketing", 42000],
];

// Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben
console.log(employeeOverview);
