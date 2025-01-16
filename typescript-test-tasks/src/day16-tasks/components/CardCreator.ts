import { BasketballCard } from "../data.ts";

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

export default createCard;
