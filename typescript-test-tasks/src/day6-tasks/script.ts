// - ==================== LEVEL 1_1 - Arrays definieren ====================
const bucketList: string[] = ["Buenos Aires", "Reykjavik", "Amsterdam"];
const luckyNumbers: number[] = [21, 77, 111];
const favoritePeople: string[] = ["Suzy", "Lucy", "Macy"];
console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// - ==================== LEVEL 1_2 - Zugriff auf Array-Werte  ====================
// Denke daran, dass Arrays 0-indiziert sind, d.h. sie fangen bei 0 an zu zählen.

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// - ==================== LEVEL 1_3 - Length ====================
// Um die Anzahl der Werte in einem Array zu ermitteln, kannst du length verwenden.

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// - ==================== LEVEL 1_4 - Push() ====================
// Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.

bucketList.push("Shanghai", "Istanbul");
console.log(bucketList);

luckyNumbers.push(5, 55, 99);
console.log(luckyNumbers);

favoritePeople.push("James", "Harry");
console.log(favoritePeople);
// - ==================== LEVEL 1_5 - Pop() ====================
// Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// .pop() entfernt jeweils NUR das letzte Element (keine Argumente/Zahlen in () möglich)

console.log("Entfernt: " + bucketList.pop());
console.log(bucketList);

console.log("Entfernt: " + luckyNumbers.pop());
console.log(luckyNumbers);

const lastFavoritePerson = favoritePeople.pop();
console.log("Entfernt: " + lastFavoritePerson);
console.log(favoritePeople);

// - ==================== LEVEL 1_6 - shift() ====================
// Die Array-Methode shift() ist pop() sehr ähnlich.
// Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert.
// Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne.

const firstFavoritePerson = favoritePeople.shift();
console.log("Entfernt: " + firstFavoritePerson);
console.log(favoritePeople);

// - ==================== LEVEL 1_7 - unshift() ====================
// Die Array-Methode unshift() ist push() sehr ähnlich.
// Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle.
// Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen.
// Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht.

bucketList.unshift("London", "Paris");
console.log(bucketList);
console.log(bucketList.length);

// - ==================== LEVEL 1_8 - slice () ====================
// Mit slice() kann man Werte aus einem Array schneiden und bekommt ein neues Array zurück.
// Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.
// Der Endindex gibt an, dass der Ausschnitt bis zu, aber nicht einschließlich, diesem Index reicht.

const lieblingsreiseziele: string[] = [
  "Buenos Aires",
  "Santiago de Chile",
  "Rio de Janeiro",
  "Miami",
  "Austin",
  "Los Angeles",
];

console.log(lieblingsreiseziele);

lieblingsreiseziele.slice(2, 4);
console.log(lieblingsreiseziele);
console.log(lieblingsreiseziele.slice(2, 4));

// - ==================== LEVEL 1_9 - Unterschied push-pop & shift-unshift ====================

const numbers: number[] = [23, 54, 75];
console.log(numbers);

numbers.push(5);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.shift();
console.log(numbers);

// - ==================== LEVEL 1_14 ====================
