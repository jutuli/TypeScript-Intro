import movies from "../movies";

const movieContainer = document.querySelector("#movie-grid");

const createMovieCard = () =>
  movies.forEach(([title, year, director, duration, genres, rating]) => {
    const movieCardElement = document.createElement("div");
    movieCardElement.className =
      "flex aspect-square flex-col items-center justify-start gap-1 rounded-xl bg-lime-200 pt-10";
    movieCardElement.innerHTML = `
  <h3 class="text-xl font-bold text-gray-900">${title}</h3>
  <p class="text-base text-gray-900">${year}</p>
  <p class="py-2 text-base font-semibold text-gray-900">${director}</p>
  <p class="text-base text-gray-900">${duration}</p>
  <p class="text-base text-gray-900">${genres}</p>
  <p class="text-base text-gray-900">${rating}</p>
  `;
    movieContainer?.appendChild(movieCardElement);
  });

export default createMovieCard;
