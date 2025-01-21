import movies from "../movies";
import createMovieCard from "./MovieCard";

// Search Movies Funktion, um innerhalb von Titel, Director, Year, Duration, Rating zu suchen
function searchMovies(input: string) {
  const matchingMovies = movies.filter((movie) => {
    for (const element of movie) {
      if (
        // Typ muss String sein, damit über lowerCase gesucht werden kann (funktioniert nicht auf string[])
        typeof element === "string" &&
        element.toLowerCase().includes(input.toLowerCase())
      ) {
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
      movieGrid.innerHTML = `<p></p>
        <p class='font-lg font-bold text-center'>Es wurde kein passender Film gefunden.</p>
        <p></p>`;
    }
  }
  return matchingMovies;
}

export default searchMovies;
