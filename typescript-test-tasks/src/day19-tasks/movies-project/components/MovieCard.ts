import movies from "../movies";

// movies besteht aus einem Array aus Arrays [], das innere Array aus String oder String[]
const createMovieCard = (
  movies: [string, string, string, string, string[], string][],
) => {
  const movieContainer = document.querySelector("#movie-grid");
  if (!movieContainer) return;
  // Vorherige Inhalte entfernen, falls z.B. gefiltert wird
  movieContainer.innerHTML = "";
  movies.forEach(([title, year, director, duration, genres, rating]) => {
    const movieCardElement = document.createElement("div");
    movieCardElement.className =
      "flex aspect-square flex-col items-center justify-start gap-1 rounded-xl bg-lime-200 pt-6 px-3";
    movieCardElement.innerHTML = `
  <h3 class="text-xl text-center font-bold text-gray-900">${title}</h3>
  <p class="text-base text-center text-gray-900">${year}</p>
  <p class="py-2 text-base text-center font-semibold text-gray-900">${director}</p>
  <p class="text-base text-center text-gray-900">${duration}</p>
  <p class="text-base text-center text-gray-900">${genres.join(", ")}</p>
  <p class="text-base text-center text-gray-900">Rating: ${rating}</p>
  `;
    movieContainer.appendChild(movieCardElement);
  });
};

export default createMovieCard;
