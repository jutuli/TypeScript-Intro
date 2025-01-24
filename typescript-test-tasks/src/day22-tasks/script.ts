// - =================== LEVEL 3_1 ===================
// Suche dir eine API von Folgenden aus:
// API um Informationen über Länder abzurufen: https://restcountries.com/
// Pokemon API: https://pokeapi.co/
// Rick and Morty API: [https://rickandmortyapi.com](https://rickandmortyapi.com/)
// *Quizfragen: https://the-trivia-api.com/docs/v2/*
// Schau zunächst in die Dokumentation und rufe Daten mit Postman oder einem anderen Tool ab

// Lege ein oder mehrere Interfaces für die Daten an, die du abrufen und darstellen willst
interface QuizQuestionModel {
  category: string;
  difficulty: string;
  id: string;
  isNiche: boolean;
  regions: string[];
  tags: string[];
  type: string;
  question: {
    text: string;
  };
  correctAnswer: string;
  incorrectAnswers: string[];
}

const quizContainer = document.querySelector("#quiz-container");

// Rufe die Daten ab
fetch("https://the-trivia-api.com/v2/questions")
  .then((response) => response.json())
  .then((quizEntries) => {
    console.log(quizEntries);
    if (!quizContainer) return;
    // Stelle die Daten ansprechend auf einer HTML-Seite dar
    quizEntries.forEach((quizEntry: QuizQuestionModel) => {
      const quizElement = document.createElement("article");
      quizElement.className = "w-full my-4 flex flex-col gap-2";
      quizElement.innerHTML = `
        <h3 class="mt-6 mb-2 text-xl font-bold">${quizEntry.question.text}</h3>
        <ul class="grid w-full grid-cols-2 gap-4">
          <li><button class="incorrect-btn w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white hover:font-bold">A) ${quizEntry.incorrectAnswers[0]}</button></li>
          <li><button class="incorrect-btn w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white hover:font-bold">B) ${quizEntry.incorrectAnswers[2]}</button></li>
          <li><button class="correct-btn w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white hover:font-bold">C) ${quizEntry.correctAnswer}</button></li>
          <li><button class="incorrect-btn w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white hover:font-bold">D) ${quizEntry.incorrectAnswers[1]}</button></li>
        </ul>
      `;
      quizContainer.appendChild(quizElement);
    });
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        console.log("button was clicked");
        button.classList.remove(
          "hover:bg-amber-500",
          "hover:text-white",
          "hover:font-bold",
        );
        if (button.classList.contains("incorrect-btn")) {
          button.classList.add("bg-red-500", "text-white", "font-bold");
          button.disabled = true;
          button;
        } else {
          button.classList.add("bg-green-500", "text-white", "font-bold");
          button.disabled = true;
        }
      });
    });
  })
  // Fange mögliche Fehler ab
  .catch((error) => console.log("There has been an error: ", error));
