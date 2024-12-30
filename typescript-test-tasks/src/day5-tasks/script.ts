// - ================ LEVEL 1_1 =================

function intro1(): void {
  console.log("Hello Function");
}

intro1();

const intro2 = () => {
  console.log("Hello Function 2");
};

intro2();

// - ================ LEVEL 1_3 =================

function showPersonInfo(name: string, city: string, age: number) {
  console.log(
    `Hallo, mein Name ist ${name}. Ich bin ${Math.floor(
      age
    )} Jahre alt. Ich komme aus ${city}.`
  );
}

showPersonInfo("Sarah", "Berlin", 27);

const showPersonInfo2 = (name: string, city: string, age: number) => {
  console.log(
    `Hallo, mein Name ist ${name}. Ich bin ${Math.floor(
      age
    )} Jahre alt. Ich komme aus ${city}.`
  );
};

showPersonInfo2("Sarah", "Berlin", 27);

// - ================ LEVEL 1_4 =================

function showHero(heroName: string, heroPower: string, heroEnemy: string) {
  let nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}`;
  let powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}`;
  let enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;
  console.log(nameOutput + ". " + powerOutput + ". " + enemyOutput);
}

showHero("Blazing Star", "Transparency", "Snowman");

// - ================ LEVEL 1_5 =================

function multipyAndDivide(a: number, b: number) {
  console.log(`Multiplikation von ${a} und ${b}:`, a * b);
  if (b === 0) {
    console.log("Division durch 0 ist nicht erlaubt.");
  } else {
    console.log(`Division von ${a} und ${b}:`, a / b);
  }
}

multipyAndDivide(10, 2);
multipyAndDivide(30, 20);
multipyAndDivide(100, 100);
multipyAndDivide(5, 0);
multipyAndDivide(45, 173);
multipyAndDivide(1, 1000);

// - ================ LEVEL 1_6 =================

function returnOne() {
  return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
} else {
}

// - ================ LEVEL 1_7 =================

function mulitiplyByTwo(a: number) {
  return a * 2;
}

console.log(mulitiplyByTwo(3));

const multiplyByTwo2 = (a: number) => a * 2;

console.log(multiplyByTwo2(2));

// - ================ LEVEL 1_8 =================

// TASK 1
function calculateAge(birthYear: number) {
  return new Date().getFullYear() - birthYear;
}
console.log(calculateAge(1995));

const calculateAge2 = (birthYear: number) =>
  new Date().getFullYear() - birthYear;
console.log(calculateAge2(1995));

// TASK 2
function compareAges(ageA: number, ageB: number) {
  const ageDifference = ageA - ageB;
  return ageDifference;
}

console.log(compareAges(12, 7));

const ageDifference2 = (ageA: number, ageB: number) => ageA - ageB;
console.log(ageDifference2(12, 7));

// - ================ LEVEL 1_9 =================

function selfIntroductionByUser(
  firstName: string,
  lastName: string,
  placeOfBirth: string,
  age: number,
  placeOfResidence: string
) {
  console.log(
    "Mein Name ist " +
      firstName +
      " " +
      lastName +
      ". Ich bin in " +
      placeOfBirth +
      " geboren. Ich lerne bei SuperCode. Ich bin " +
      age +
      " Jahre alt. Ich wohne in " +
      placeOfResidence +
      "."
  );
}

selfIntroductionByUser("Aurora", "Stardust", "New York", 20, "Celestia");
