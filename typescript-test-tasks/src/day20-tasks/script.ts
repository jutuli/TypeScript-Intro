// - ===================== LEVEL 1_1 =====================
// Nutze den Endpunkt /list der [Picsum API](https://picsum.photos/v2/list) und lass dir die Liste der Bilder in der Console ausgeben.
// Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) =>
    console.log(
      "There has been an error, please check the error message: ",
      error,
    ),
  );

// - ===================== LEVEL 1_2 =====================
// Nutze die JSON-Placeholder API und hole dort mit fetch die Kommentare zum post1 unter https://jsonplaceholder.typicode.com/posts/1/comments ab
// Lass dir die E-Mail-Adressen aller Kommentierenden auf der Konsole ausgeben
// Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => response.json())
  .then((data: Comment[]) =>
    data.forEach((comment) => console.log(comment.email)),
  )
  .catch((error) =>
    console.log("There has been an error. Error Message: ", error),
  );

// Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts und verarbeite sie weiter

type Post = {
  user: number;
  id: number;
  title: string;
  body: string;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  // gib alle Posts auf der Konsole aus
  .then((data: Post[]) => {
    console.log(data);
    return data;
  })
  // finde die höchste Post-Id und gib sie auf der Konsole aus
  .then((data: Post[]) => {
    const ids: number[] = data.map((post) => post.id);
    const maxId: number = Math.max(...ids);
    console.log(maxId);
    return data;
  })
  // finde den kürzesten Titel gib ihn auf der Konsole aus
  .then((data: Post[]) => {
    const titles: string[] = data.map((post) => post.title);
    const sortedTitles: string[] = titles.sort((a, b) => a.length - b.length);
    console.log(sortedTitles[0]);
    return data;
  })
  // finde den längsten Body und gib ihn auf der Konsole aus
  .then((data) => {
    const bodies: string[] = data.map((post) => post.body);
    const sortedBodies: string[] = bodies.sort((a, b) => a.length - b.length);
    console.log(sortedBodies[sortedBodies.length - 1]);
  });

// - ===================== LEVEL 2_1 =====================
// Nutze wieder die [Picsum API](https://picsum.photos/v2/list)
// Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor:in in ein figure-Element wrappen und in deinem HTML ausgeben lassen
// Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an
// Verwende appendChild für die Darstellung der Element
// Gib dem img-Tag in deinem CSS eine Breite von 50%, damit das Ganze nicht zu unübersichtlich wird.

const picGrid = document.querySelector("#pic-grid");

type PicObject = {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

function createPictureGallery(): void {
  // falls es Elternelement nicht gibt, Funktionsaufruf beenden
  if (!picGrid) return;
  // ansonsten Daten holen und verarbeiten
  fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element: PicObject) => {
        const figureElement = document.createElement("figure");
        figureElement.className = "flex flex-col items-center justify-center";
        figureElement.innerHTML = `
        <img class="w-1/2 " src="${element.download_url}">
        <figcaption>${element.author}</figcaption>`;
        picGrid.appendChild(figureElement);
      });
    })
    .catch((error) =>
      console.log("There has been an error. Error Message: ", error),
    );
}

createPictureGallery();
