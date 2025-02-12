// - ========================== LEVEL 1_1 ==========================
// Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
// Die Klasse soll folgende Attribute haben: name: string, price: number, isPopular: boolean, description: string → optional
// name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined
// Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften
// Lege die 4 Instanzen in einem Array ab
// Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben

import { iceCreamFlavors } from "./IceCreamFlavor";

const popularFlavors = iceCreamFlavors.filter(
  (flavor) => flavor.isPopular === true,
);
console.log(popularFlavors);

// - ========================== LEVEL 1_2 ==========================
// Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
// Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
// Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
// die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
// Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden
// Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

import { alphaClass, betaClass, gammaClass } from "./SchoolClass";

console.log(alphaClass, betaClass, gammaClass);

alphaClass.name = "Alpha One";
betaClass.name = "Beta Two";

console.log(alphaClass, betaClass, gammaClass);

// - ========================== LEVEL 2_1 ==========================
// Wir wollen unsere Schulklassenverwaltung (SchoolClass) nun weiter ausbauen.
// Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften: id, firstName, lastName, birthday
// Überlege dir hierzu selbst die passenden Datentypen.
// Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen.
// Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu
// Lass dir alle Personen aus der Schulklasse ausgeben
// du kannst eine Schleife zur Erstellung von den Personen benutzen.

import { SchoolClass } from "./SchoolClass";
import { Student } from "./Student";

const deltaStudents: Student[] = [];

const maxMustermann: Student = new Student(
  1,
  "Max",
  "Mustermann",
  new Date(2016, 6, 12),
);

const erikaMusterfrau: Student = new Student(
  2,
  "Erika",
  "Musterfrau",
  new Date(2016, 7, 3),
);

deltaStudents.push(maxMustermann);
deltaStudents.push(erikaMusterfrau);

const deltaClass: SchoolClass = new SchoolClass(4, "Delta", deltaStudents);

console.log(deltaClass);

// - ========================== LEVEL 2_2 ==========================
// Erstelle eine Klasse Car mit folgenden Eigenschaften: brand (Marke), constructionYear(Baujahr), currentSpeed (aktuelle Geschwindigkeit)
// Überlege dir sinnvolle Datentypen für die Eigenschaften.
// Erstelle eine separate Klasse Driver mit folgenden Eigenschaften: firstName (Vorname), lastName (Nachname), age (Alter), car (Auto)
// Überlege dir sinnvolle Datentypen für die Eigenschaften.
// Im Konstruktor von Driver soll bereits das zugehörige Auto übergeben und gesetzt werden.
// Zu guter Letzt sollst du in der Datei app.ts, mehrere Autos und Fahrer erstellen und miteinander verknüpfen

import Driver from "./Driver";
import Car from "./Car";

const amg = new Car("Mercedes", 2017, 180);
const john = new Driver("John", "Doe", 31, amg);
console.log(john);

const golf = new Car("Volkswagen", 2009, 160);
const jane = new Driver("Jane", "Doe", 32, golf);
console.log(jane);

// - ========================== LEVEL 3_1 ==========================
// Wir wollen die Grundlagen für eine Streaming-App schaffen.
// Hierzu brauchen wir die Klassen: Series (= Serie), Episode (=Episode) und Actor (=Darsteller:in)

// Es besteht folgender Zusammenhang
// Serien haben Episoden
// Episoden haben Darsteller:innen

// Ein Serie hat folgende Eigenschaften: title, description, startYear, endYear, episodes

// Eine Episode hat folgende Eigenschaften: title, length, description, actors

//Eine Actor hat folgende Eigenschaften: firstName, lastName, birthday, gender

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Lege 3 Serien mit ein paar Episoden und Darsteller:innen an

import Series from "./Series";
import Episode from "./Episode";
import Actor from "./Actor";

const breakingBad = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned meth manufacturer.",
  2008,
  2013,
  [
    new Episode(
      "Pilot",
      "58 min",
      "A high school chemistry teacher turned meth manufacturer.",
      [
        new Actor("Bryan", "Cranston", new Date("1956-03-07"), "Male"),
        new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male"),
      ],
    ),
    new Episode(
      "Cat's in the Bag...",
      "48 min",
      "Walter and Jesse clean up after the first drug deal goes wrong.",
      [
        new Actor("Bryan", "Cranston", new Date("1956-03-07"), "Male"),
        new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male"),
      ],
    ),
  ],
);

const friends = new Series(
  "Friends",
  "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
  1994,
  2004,
  [
    new Episode(
      "The One Where It All Began",
      "22 min",
      "Monica and the gang introduce Rachel to the real world after she leaves her fiancé at the altar.",
      [
        new Actor("Jennifer", "Aniston", new Date("1969-02-11"), "Female"),
        new Actor("Matthew", "Perry", new Date("1969-08-19"), "Male"),
      ],
    ),
    new Episode(
      "The One With The Blackout",
      "22 min",
      "During a city-wide power outage, Ross tries to tell Rachel that he likes her, and Chandler gets stuck in an ATM vestibule with a model.",
      [
        new Actor("Jennifer", "Aniston", new Date("1969-02-11"), "Female"),
        new Actor("Matthew", "Perry", new Date("1969-08-19"), "Male"),
      ],
    ),
  ],
);

// Schreibe eine Funktion printSeriesInfo(series: Series), die beispielhaft für eine Serie Folgendes auf der Konsole ausgibt.

function printSeries(series: Series) {
  const allActors: Actor[] = series.episodes.flatMap(
    (episode) => episode.actors,
  );
  console.log(`
        Title: ${series.title}
        Description: ${series.description}
        Start Year: ${series.startYear}
        End Year: ${series.endYear}
        Number of Episodes: ${series.episodes.length}
        Actors: ${allActors.map(
          (actor) => `
            ${actor.firstName} ${actor.lastName}
            Birth Year: ${actor.birthday.getFullYear()}
            Gender: ${actor.gender}
            `,
        )}
        `);
}

printSeries(breakingBad);
printSeries(friends);
// Title: Breaking Bad
// Description: A high school chemistry teacher turned methamphetamine manufacturer
// Start Year: 2008
// End Year: 2013
// Number of Episodes: 2

// Actors:
//Bryan Cranston
//  Birthday: 1956-03-07
//  Gender: Male
//Aaron Paul
//  Birthday: 1979-08-27
//  Gender: Male
//Anna Gunn
//  Birthday: 1968-04-11
//  Gender: Female

// Bei Actors sollen alle Darsteller:innen aus allen Episoden ausgegeben werden.
// zeige bei Actors keine doppelten Werte an
