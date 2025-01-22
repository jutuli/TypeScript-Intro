import createMovieCard from "./components/MovieCard";
import searchMovies from "./components/MovieSearch";
import {
  sortBestRating,
  sortYearDown,
  sortYearUp,
} from "./components/MovieSorting";
import movies from "./movies";

createMovieCard(movies);

// Klick auf "Search" Button ermöglicht Filterung der angezeigten Ergebnisse
document.querySelector("#submit-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  // Input auslesen
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  searchMovies(searchInputValue);
});

// Beim Eintippen beginnt bereits die Suche
document.querySelector("#search-input")?.addEventListener("input", () => {
  // Input auslesen
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  searchMovies(searchInputValue);
});

// Klick auf "Year Up" Button ermöglicht Sortierung nach Jahr (aufsteigend)
document
  .querySelector("#year-up-btn")
  ?.addEventListener("click", () => sortYearUp());

// Klick auf "Year Down" Button ermöglicht Sortierung nach Jahr (absteigend)
document
  .querySelector("#year-down-btn")
  ?.addEventListener("click", () => sortYearDown());

// Klick auf "Best Rating" Button ermöglicht Sortierung nach Rating (absteigend)
document
  .querySelector("#best-rating-btn")
  ?.addEventListener("click", () => sortBestRating());
