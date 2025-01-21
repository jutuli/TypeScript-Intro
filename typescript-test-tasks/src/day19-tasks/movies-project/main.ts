import createMovieCard from "./components/MovieCard";
import movies from "./movies";

createMovieCard(movies);

function searchMovies(input: string) {
  const matchingMovies = movies.filter((movie) => {
    for (const element of movie) {
      if (element.includes(input)) {
        return true;
      }
    }
    return false;
  });
  if (matchingMovies.length > 0) {
    createMovieCard(matchingMovies);
  } else {
    const movieGrid = document.querySelector("#movie-grid");
    if (movieGrid) {
      movieGrid.classList.remove("grid-cols-3");
      movieGrid.innerHTML =
        "<p class='font-lg font-bold text-center'>Es wurde kein passender Film gefunden.</p>";
    }
  }
}

// Funktionsaufruf durch Button Click auf Search
document.querySelector("#submit-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  // Input auslesen
  const searchInput = document.querySelector<HTMLInputElement>("#search-input");
  const searchInputValue = searchInput?.value || "";
  searchMovies(searchInputValue);
});
