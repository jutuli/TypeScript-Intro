import movies from "../movies";
import createMovieCard from "./MovieCard";
import searchMovies from "./MovieSearch";

export function sortYearUp() {
  // Input auslesen, damit nur über den gesuchten Input sortiert wird und nicht alle Filme
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  const sortedYearUp = searchMovies(searchInputValue).sort(
    (
      a: [string, string, string, string, string[], string],
      b: [string, string, string, string, string[], string],
    ) => {
      return Number(a[1]) - Number(b[1]);
    },
  );
  createMovieCard(sortedYearUp);
}

export function sortYearDown() {
  // Input auslesen, damit nur über den gesuchten Input sortiert wird und nicht alle Filme
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  const sortedYearDown = searchMovies(searchInputValue).sort(
    (
      a: [string, string, string, string, string[], string],
      b: [string, string, string, string, string[], string],
    ) => {
      return Number(b[1]) - Number(a[1]);
    },
  );
  createMovieCard(sortedYearDown);
}

export function sortBestRating() {
  // Input auslesen, damit nur über den gesuchten Input sortiert wird und nicht alle Filme
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  const sortedBestRating = searchMovies(searchInputValue).sort(
    (
      a: [string, string, string, string, string[], string],
      b: [string, string, string, string, string[], string],
    ) => {
      return Number(b[5]) - Number(a[5]);
    },
  );
  createMovieCard(sortedBestRating);
}
