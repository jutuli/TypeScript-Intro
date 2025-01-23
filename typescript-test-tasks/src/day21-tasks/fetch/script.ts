// - =================== LEVEL 2_2 ===================
// Nutze die [JSON-Placeholder API](https://jsonplaceholder.typicode.com/todos) und hole dort mit fetch alle Aufgaben unter https://jsonplaceholder.typicode.com/todos ab

// Lege ein Interface IToDo mit den entsprechenden Datentypen an
interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const toDoContainer = document.querySelector("#task2-2");

// Verwende das Interface beim fetch
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data: IToDo[]) => {
    // Die Aufgaben sollen alphabetisch nach Titel sortiert werden
    const sortedToDos: IToDo[] = data.sort((a: IToDo, b: IToDo) =>
      a.title.localeCompare(b.title),
    );
    // Zeige die Aufgaben in deiner HTML-Seite an
    if (!toDoContainer) return;
    sortedToDos.forEach((toDo) => {
      const toDoElement = document.createElement("p");
      toDoElement.textContent = `${toDo.title}`;
      // Verwende unterschiedliche Farben, je nachdem ob die Aufgabe erledigt oder noch offen ist
      if (toDo.completed === true) {
        toDoElement.style.color = "green";
      } else {
        toDoElement.style.color = "red";
      }
      toDoContainer.appendChild(toDoElement);
    });
  })
  // Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an
  .catch((error) => console.log("There has been an error: ", error));

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

const quizContainer = document.querySelector("#task3-1");

// Rufe die Daten ab
fetch("https://the-trivia-api.com/v2/questions")
  .then((response) => response.json())
  .then((quizEntries) => {
    console.log(quizEntries);
    if (!quizContainer) return;
    // Stelle die Daten ansprechend auf einer HTML-Seite dar
    quizEntries.forEach((quizEntry: QuizQuestionModel) => {
      const quizElement = document.createElement("article");
      quizElement.innerHTML = `
        <h3 class="mt-6 mb-2 text-xl font-bold">${quizEntry.question.text}</h3>
        <ul class="grid w-1/2 grid-cols-2 gap-4">
          <li><button class="w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white">A) ${quizEntry.incorrectAnswers[0]}</button></li>
          <li><button class="w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white">B) ${quizEntry.incorrectAnswers[2]}</button></li>
          <li><button class="w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white">C) ${quizEntry.correctAnswer}</button></li>
          <li><button class="w-full cursor-pointer rounded-2xl border border-amber-500 px-4 py-2 text-left hover:bg-amber-500 hover:text-white">D) ${quizEntry.incorrectAnswers[1]}</button></li>
        </ul>
      `;
      quizContainer.appendChild(quizElement);
    });
  })
  // Fange mögliche Fehler ab
  .catch((error) => console.log("There has been an error: ", error));
