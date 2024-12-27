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
const schoolGrade = Math.ceil(Math.random() * 10);

switch (schoolGrade) {
  case 1:
    console.log("sehr gut");
    break;
  case 2:
    console.log("gut");
    break;
  case 3:
    console.log("befriedigend");
    break;
  case 4:
    console.log("ausreichend");
    break;
  case 5:
    console.log("mangelhaft");
    break;
  case 6:
    console.log("unbefriedigend");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Das ist keine gültige Schulnote.");
    break;
  default:
    console.log("Die Zahl ist außerhalb der Vorgaben 1-10");
}

// - ====================== LEVEL 3_1 ======================
// Task 1
const salesMonth = Math.ceil(Math.random() * 12);
let salesQuarter: string | null;

switch (salesMonth) {
  case 1:
  case 2:
  case 3:
    salesQuarter = "1. Quartal";
    break;
  case 4:
  case 5:
  case 6:
    salesQuarter = "2. Quartal";
    break;
  case 7:
  case 8:
  case 9:
    salesQuarter = "3. Quartal";
    break;
  case 10:
  case 11:
  case 12:
    salesQuarter = "4. Quartal";
    break;
  default:
    salesQuarter = null;
    console.log("The sales month does not exist");
}

console.log(salesQuarter);

// Task 2
const totalSales = Math.floor(Math.random() * 9001 + 1000);
let salesVolume: string | null;

switch (true) {
  case totalSales >= 1000 && totalSales <= 2500:
    salesVolume = "schlecht";
    break;
  case totalSales > 2500 && totalSales <= 5000:
    salesVolume = "mittelmäßig";
    break;
  case totalSales > 5000 && totalSales <= 7500:
    salesVolume = "hoch";
    break;
  case totalSales > 7500 && totalSales <= 10000:
    salesVolume = "unglaublich";
    break;
  default:
    salesVolume = null;
}

console.log(`Im ${salesQuarter} war der Umsatz ${salesVolume}.`);
