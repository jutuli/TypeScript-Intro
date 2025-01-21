import movies from "../movies";
import createMovieCard from "./MovieCard";

export function sortYearUp() {
  const sortedYearUp = movies.sort(
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
  const sortedYearDown = movies.sort(
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
  const sortedBestRating = movies.sort(
    (
      a: [string, string, string, string, string[], string],
      b: [string, string, string, string, string[], string],
    ) => {
      return Number(b[5]) - Number(a[5]);
    },
  );
  createMovieCard(sortedBestRating);
}
