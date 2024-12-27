// - ============================ LEVEL 1_1 ==========================
console.log(Math.PI);
const pi = Math.PI;
const roundedPI = Math.PI.toFixed(2);
console.log(roundedPI);

// - ============================ LEVEL 1_2 =========================
const randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];
console.log(Math.round(randomNumbers[0]));
console.log(Math.round(randomNumbers[1]));
console.log(Math.round(randomNumbers[2]));
console.log(Math.round(randomNumbers[3]));

// - ============================ LEVEL 1_3 =========================
const randomNum = Math.random();
const randomNum1_10 = Math.ceil(Math.random() * 10);
const randomNum1_100 = Math.ceil(Math.random() * 100);
// alternativ mit .floor:
// const randomNum1_10 = Math.floor(Math.random()*10+1)
// const randomNum1_100 = Math.floor(Math.random()*100+1)

console.log(randomNum, randomNum1_10, randomNum1_100);

// - ============================ LEVEL 2_2 =========================
const gameNumber = Math.ceil(Math.random() * 10);
const inputNumber = Number(
  window.prompt("Schätzen Sie eine Zahl zwischen 1 und 10.")
);

switch (true) {
  case inputNumber === gameNumber:
    console.log("Du hast gewonnen! Du hast die richtige Zahl geschätzt");
    break;
  case inputNumber !== gameNumber:
    console.log(
      `Du hast verloren. Die richtige Zahl wäre ${gameNumber} gewesen.`
    );
    break;
  default:
    console.log("Something went wrong, please try again");
}
