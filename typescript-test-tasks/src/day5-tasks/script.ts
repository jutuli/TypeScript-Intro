// - ================ LEVEL 1_1 =================

import { isFirstDayOfMonth } from "date-fns";

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

// - ================ LEVEL 1_5 =================

// - ================ LEVEL 1_6 =================

// - ================ LEVEL 1_7 =================

// - ================ LEVEL 1_8 =================

// - ================ LEVEL 1_9 =================
