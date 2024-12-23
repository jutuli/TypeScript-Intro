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
