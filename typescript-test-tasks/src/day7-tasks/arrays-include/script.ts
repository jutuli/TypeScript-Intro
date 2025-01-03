// - =================== LEVEL 1_11 ==================
// Verwende die Methode includes() um herauszufinden, ob der gesuchte Substring im String vorhanden ist.
// Deine Suche soll case insensitive sein

const string: string =
  "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

function search(word: string) {
  const checkInclusion = string.toLowerCase().includes(word.toLowerCase());
  console.log(checkInclusion);
}

search("Piper");
search("piper");

function searchFromIndexword(word: string, indexword: string) {
  const checkInclusionFromIndexword = string
    .toLowerCase()
    .includes(word.toLowerCase(), string.indexOf(indexword));
  console.log(checkInclusionFromIndexword);
}

searchFromIndexword("piper", "peck");
searchFromIndexword("peck", "pickled");
