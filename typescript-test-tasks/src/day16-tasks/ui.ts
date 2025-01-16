import { BasketballCard } from "./data.ts";

// Interaktion des Formulars verwalten
// Formulareingabe sammeln
// Erstellung von Karte & Anzeigen in DOM
// Button Add/Save/Delete -> soll der Add-Button in Save umbenannt werden, nach dem Speichern der Änderung wird das Formular wieder geleert, wird der Save-Button in Add zurückbenannt

// Input aus dem Formular speichern
export const initializeUI = () => {
  document.querySelector("#add-card-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = getFormData();
    if (formData !== null) {
      createCard(formData);
    }
    console.log(formData);
  });
};

// Formulardaten holen und in Objekt abspeichern (inkl. Logik falls Daten fehlen)
function getFormData(): BasketballCard | null {
  const firstName: string =
    document.querySelector<HTMLInputElement>("#first-name")?.value ??
    "Not Found";
  const lastName: string =
    document.querySelector<HTMLInputElement>("#last-name")?.value ??
    "Not Found";
  const age: number = parseInt(
    document.querySelector<HTMLInputElement>("#age")?.value ?? "Not Found",
  );
  const height: number = parseInt(
    document.querySelector<HTMLInputElement>("#height")?.value ?? "Not Found",
  );
  const currentTeam: string =
    document.querySelector<HTMLInputElement>("#current-team")?.value ??
    "Not Found";
  const jerseyNumber: number = parseInt(
    document.querySelector<HTMLInputElement>("#jersey-number")?.value ??
      "Not Found",
  );
  const position: string =
    document.querySelector<HTMLInputElement>("#position")?.value ?? "Not Found";
  const ppg: number = parseFloat(
    document.querySelector<HTMLInputElement>("#ppg")?.value ?? "Not Found",
  );
  const imageUrl: string =
    document.querySelector<HTMLInputElement>("#img-url")?.value ?? "Not Found";

  const stringEntries = [firstName, lastName, currentTeam, position, imageUrl];

  const numericEntries = [age, height, jerseyNumber, ppg];

  if (stringEntries.includes("Not Found") || numericEntries.includes(NaN)) {
    console.log("String entries:", stringEntries);
    console.log("Numeric entries:", numericEntries);
    alert("Please fill all fields.");
    return null;
  } else {
    return {
      firstName,
      lastName,
      age,
      height,
      currentTeam,
      jerseyNumber,
      position,
      ppg,
      imageUrl,
    };
  }
}

function createCard(cardData: BasketballCard): void {
  const cardsSection = document.querySelector("#collection");
  const newCard = document.createElement("div");
  newCard.style.backgroundImage = `url("${cardData.imageUrl}")`;
  newCard.classList.add(
    "w-64",
    "h-80",
    "rounded-lg",
    "shadow-lg",
    "bg-no-repeat",
    "bg-cover",
    "text-white",
    "flex",
    "flex-col",
    "justify-end",
  );
  newCard.innerHTML = `
  <div class="bg-black/50 w-full p-4 rounded-lg">
  <h1 class="text-lg font-bold">${cardData.firstName} ${cardData.lastName}</h1>
  <p>Age: <span class= font-bold>${cardData.age}</span>  |  Height: <span class= font-bold>${cardData.height}</span></p>
  <p>Current Team: <span class= font-bold>${cardData.currentTeam}</span>  |  Jersey # <span class= font-bold>${cardData.jerseyNumber}</span></p>
  <p>Position: <span class= font-bold>${cardData.position}</span></p>
  <p>Points per Game (PPG): <span class= font-bold>${cardData.ppg}</span></p>
  </div>
  `;
  cardsSection?.appendChild(newCard);
}
