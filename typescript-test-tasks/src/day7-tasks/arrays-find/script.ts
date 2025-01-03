// - ================ LEVEL 3_1 ================
// Schreibe eine Funktion, die einen Parameter artworkName übergeben bekommt
// Die Funktion soll in artworks und artworkDates nach dem Namen suchen
// Wird nichts gefunden, wird “Artwork [artworkName] not found” auf der Konsole ausgegeben
// Wird ein Ergebnis gefunden, wird Folgendes ausgeben "'Die Sternennacht' wurde von Vincent van Gogh im Jahre 1889 gemalt"

const artworks: Array<string> = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Der Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworkDates: Array<string> = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Der Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function searchArtWork(artworkName: string) {
  const artistEntry = artworks.find((artwork) =>
    artwork.toLowerCase().includes(artworkName.toLowerCase())
  );
  const artDateEntry = artworkDates.find((artwork) =>
    artwork.toLowerCase().includes(artworkName.toLowerCase())
  );
  if (artistEntry && artDateEntry) {
    console.log(
      `'${artistEntry.split(" - ")[0]}' wurde von ${
        artistEntry.split(" - ")[1]
      } im Jahre ${artDateEntry.split(" - ")[1]} gemalt.`
    );
  } else {
    console.log(`Artwork ${artworkName} not found.`);
  }
}

searchArtWork("Sternennacht");
searchArtWork("sternennacht");
searchArtWork("Mona");
searchArtWork("monalisa");
