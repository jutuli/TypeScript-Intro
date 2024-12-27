// - ====================== LEVEL 1_5 ======================
let weekdayAsNumber: number;
let weekdayAsString: string | null;

weekdayAsNumber = Number(window.prompt("Please insert a number from 1 to 7"));

switch (weekdayAsNumber) {
  case 1:
    weekdayAsString = "Montag";
    break;
  case 2:
    weekdayAsString = "Dienstag";
    break;
  case 3:
    weekdayAsString = "Mittwoch";
    break;
  case 4:
    weekdayAsString = "Donnerstag";
    break;
  case 5:
    weekdayAsString = "Freitag";
    break;
  case 6:
    weekdayAsString = "Samstag";
    break;
  case 7:
    weekdayAsString = "Sonntag";
    break;
  default:
    weekdayAsString = null;
    console.log("Weekday must be between 1 and 7");
}

console.log(weekdayAsString);

// - ====================== LEVEL 2_4 ======================
const numberA = Math.floor(Math.random() * 78);
const numberB = Math.floor(Math.random() * 78);
const result =
  numberA === numberB
    ? 1
    : numberA > numberB
    ? 2
    : numberA < numberB
    ? 3
    : null;

switch (result) {
  case 1:
    console.log("Was für ein Zufall");
    break;
  case 2:
    console.log("Erste Zahl größer");
    break;
  case 3:
    console.log("Zweite Zahl größer");
    break;
  default:
    console.log("Die Zahlen konnten nicht verglichen werden");
}

// - ====================== LEVEL 2_8 ======================

// - ====================== LEVEL 3_1 ======================
