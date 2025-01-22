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
// - ===================== LEVEL 2_1 =====================
