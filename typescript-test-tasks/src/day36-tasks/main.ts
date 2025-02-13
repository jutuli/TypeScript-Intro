// - ================================= LEVEL 1_3 ==============================
// Definiere eine Klasse Animal
// sie soll die Eigenschaften species (string), age (number) und color (string) enthalten
// Implementiere Get- und Set-Methoden für jede Eigenschaft.
// Definiere eine weitere Klasse Person, die die Eigenschaften name (string), birthday (Date) und gender (Enum) enthält.
// Implementiere Get- und Set-Methoden für name und gender, birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.

// - ================================= LEVEL 1_12 ==============================
// Wir bauen auf der Klasse IceCreamFlavors [OOP-Class-TS-Level-1_1] auf
// Die Klasse soll drei Methoden bekommen
// getTotalPrice(numberOfScoops: number)→ gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus
// printInfo()→ gibt z. B. Folgendes auf der Konsole aus
// 'Flavor Vanilla is popular and costs 2.10 Euro.'
// getLengthOfDescription()→ gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist
// Rufe die Methode bei deinen bereits bestehenden Instanzen von IceCreamFlavor auf

// Bonus
// Stelle alle IceCreamFlavors als Divs im HTML mit Name, Preis und einer Kennzeichnung bei populären Eissorten (z. B. Stern) dar
// Pro IceCreamFlavor soll es einen Button +1 geben, mit dem man die Anzahl der Kugeln nach oben setzen kann → es soll dann jeweils die getTotalPrice-Methode der entsprechenden IceCreamFlavor-Instanz aufgerufen und das Ergebnis auch im HTML angezeigt werden

import { aspargus } from "./IceCramFlavors";

console.log(
  "The Description Lenght in Characters is: ",
  aspargus.getLengthOfDescription(),
);
console.log("The total price in € is: ", aspargus.getTotalPrice(2));
aspargus.printInfo();

// - ================================= LEVEL 1_13 ==============================
// Wir bauen auf den Klassen Car und Driver auf [OOP-Class-TS-Level-2_2]
// in der Klasse Car
// => soll constructionYear nur über den Konstruktor gesetzt werden können → Wert ist nur über einen Getter (get-Methode) abrufbar
// => soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
// currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
// currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
// currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
// currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
// currentSpeed> 190 → ‘WTF’
// Lege in einer neuen Datei ein Enum namens CarType an; Werte → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck

// erweitere die Klasse Car um eine neue Eigenschaft carType: CarType
// in der Klasse Driver
// soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann→ Wert ist nur über einen Getter (get-Methode) abrufbar
// soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

import Car from "./Car";
import CarType from "./CarType";

const aKlasse = new Car("Mercedes", 2016, 185, CarType.Suv);
console.log(aKlasse.getCarType());
console.log(aKlasse.getSpeedInfo());

// - ================================= LEVEL 2_3 ===============================
// Definiere eine Klasse Customer
// sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten
// Implementiere Get- und Set-Methoden für jede Eigenschaft.
// vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

import Customer from "./Customer";

const johnDoe = new Customer(
  "John Doe",
  "john.doe@acme.com",
  "Kurfürstendamm 107",
  "10719",
  "Berlin",
);

console.log(johnDoe);
// johnDoe.name =
("Jooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooon Doe"); // ERROR
johnDoe.name = "Johnny Doe";
console.log(johnDoe.name);

// johnDoe.email = "johndoeacme.de"; // ERROR
johnDoe.email = "john.doe@acme.de";
console.log(johnDoe.email);

// johnDoe.postalCode = "1234567"; // ERROR
// johnDoe.postalCode = "f4t5w"; // ERROR
johnDoe.postalCode = "15393";
console.log(johnDoe.postalCode);
