// ! ============ TASK 1_2 ================
import WeatherType from "./weather-type";

// Erstelle ein Promise vom Typ WeatherType
// Lass dir mit Math.random einen zufälligen Wert zwischen 0 und 9 generieren
// Ist der Wert zwischen 0 und 6, gib mit resolve den zugeordneten Enum-Wert zurück
// Ist der Wert > 6, rejecte das Promise mit einem Fehlertext “Weather forecast could not be determined”
// Hänge dich an das Promise
// Gib im then-Block das Ergebnis auf der Konsole aus
// Gib im catch-Block den Fehler auf der Konsole aus

const weatherForecast: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomValue = Math.floor(Math.random() * 10);
  if (randomValue <= 6) {
    resolve(randomValue as WeatherType);
  } else {
    reject("Weather forecast could not be determined");
  }
});

weatherForecast
  .then((forecast) =>
    console.log(`The weather forecast for today is: ${WeatherType[forecast]}`),
  )
  .catch((error) => console.log(`Error: ${error}`));
