// - ===================== TASK LEVEL 2_1 =====================
// Definiere ein Enum HtmlError
enum HTMLError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

// Schreibe eine Funktion showHtmlError()
// Lass dir in der Funktion mit Math.random zufällige Zahlen zwischen 0 // 5 generieren
// ist der Wert 0, 1 oder 2, gib HtmlError.OK aus
// ist der Wert 3, gib HtmlError.Redirect aus
// ist der Wert 4, gib HtmlError.BadRequest aus
// ist der Wert 5, gib HtmlError.InternalServerError aus

function showHTMLError() {
  const num = Math.floor(Math.random() * 6);
  switch (num) {
    case 0:
    case 1:
    case 2:
      console.log(HTMLError.OK);
      break;
    case 3:
      console.log(HTMLError.Redirect);
      break;
    case 4:
      console.log(HTMLError.BadRequest);
      break;
    case 5:
      console.log(HTMLError.InternalServerError);
      break;
    default:
      console.log("The number does not indicate an HTML Error.");
  }
}

export default showHTMLError;
