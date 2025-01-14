// - =============== LEVEL 1_4 ==================
const button = document.querySelector("button") as HTMLButtonElement;

function passwordCheck() {
  const passwordInput = (
    document.querySelector("#password") as HTMLInputElement
  ).value;
  const passwordValidationOutput = document.querySelector(
    "#passwordValidation"
  ) as HTMLParagraphElement;
  passwordValidationOutput.innerText =
    passwordInput.length >= 8
      ? "This password is valid"
      : "This password is too short. Please choose a password with a minimum of 8 character.";
}

button.onclick = passwordCheck;

// - ================ LEVEL 2_2 ================
let isOnline = Math.random() > 0.5;
let isPremiumUser = Math.random() > 0.5;
let isAdult = Math.random() > 0.5;

const isOnlineCheck = isOnline === true ? "Online" : "Offline";
console.log("Is Online? " + isOnlineCheck);

let monthlyFee = 0;
isPremiumUser === true ? (monthlyFee = 19.99) : (monthlyFee = 12.99);
console.log("Monthly Fee: " + monthlyFee);

isAdult === false
  ? window.alert("Keine Berechtigung")
  : window.confirm("Willkommen");

let randomAge = Math.floor(Math.random() * 121);
let randomSalary = Math.floor(Math.random() * 15001);

let middleAged = true;
randomAge >= 40 && randomAge <= 65 ? (middleAged = true) : (middleAged = false);
console.log("Middle Aged? " + middleAged);

randomSalary > 10000
  ? console.log("You are rich")
  : randomSalary > 1500
  ? console.log("Not too much")
  : console.log("Not that much");

// - ================ LEVEL 2_4 ================
const numberA = Math.floor(Math.random() * 78);
const numberB = Math.floor(Math.random() * 78);
console.log("NumberA: " + numberA);
console.log("NumberB: " + numberB);

// Version 1
numberA === numberB
  ? console.log("What a Coincidence!")
  : numberA > numberB
  ? console.log("The first number is larger.")
  : console.log("The second number is larger.");

//   Version 2
if (numberA === numberB) {
  console.log("Both numbers are the same.");
} else if (numberA > numberB) {
  console.log("Number A is larger.");
} else {
  console.log("Number B is larger.");
}
