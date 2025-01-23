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
