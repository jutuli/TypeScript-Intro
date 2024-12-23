// - ================= LEVEL 2_1 ===============

const johnHeight = 170;
const johnAge = 22;
const maikeHeight = 168;
const maikeAge = 34;

const johnScore = johnHeight * johnAge;
const maikeScore = maikeHeight * maikeAge;

if (johnScore > maikeScore) {
  console.log(`John gewinnt das Spiel mit ${johnScore} Punkten!`);
} else if (johnScore === maikeScore) {
  console.log("Das Spiel ist ausgeglichen");
} else {
  console.log(`Maike gewinnt das Spiel mit ${maikeScore} Punkten!`);
}
