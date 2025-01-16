import { BasketballCard } from "../data.ts";

// Funktion um eine neue Card anzulegen
export function createCard(cardData: BasketballCard): void {
  const cardsArea = document.querySelector("#collection");
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
    "relative",
  );
  newCard.innerHTML = `
  <button class= "delete-btn absolute top-2 right-4 font-sans text-2xl hover:text-red-600 hover:cursor-pointer">x</button>
  <div class="bg-black/50 w-full p-4 rounded-lg">
  <h1 class="text-lg font-bold">${cardData.firstName} ${cardData.lastName}</h1>
  <p>Age: <span class= font-bold>${cardData.age}</span>  |  Height: <span class= font-bold>${cardData.height}</span></p>
  <p>Current Team: <span class= font-bold>${cardData.currentTeam}</span>  |  Jersey # <span class= font-bold>${cardData.jerseyNumber}</span></p>
  <p>Position: <span class= font-bold>${cardData.position}</span></p>
  <p>Points per Game (PPG): <span class= font-bold>${cardData.ppg}</span></p>
  </div>
  `;

  // Funktion, um eine Card wieder zu löschen (nicht im Document, sondern in newCard da noch nicht angelegt)
  newCard
    .querySelector<HTMLButtonElement>(".delete-btn")
    ?.addEventListener("click", () => {
      newCard.remove();
    });

  cardsArea?.appendChild(newCard);
}
