// - ==================== LEVEL 1_1 ====================
const bucketList = ["Buenos Aires", "Reykjavik", "Amsterdam"];
const luckyNumbers = [21, 77, 111];
const favoritePeople = ["Suzy", "Lucy", "Macy"];
console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// - ==================== LEVEL 1_2 ====================
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

// - ==================== LEVEL 1_3 ====================
// Um die Anzahl der Werte in einem Array zu ermitteln, kannst du length verwenden.

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// - ==================== LEVEL 1_4 ====================
// Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen.

bucketList.push("Shanghai", "Istanbul");
console.log(bucketList);

luckyNumbers.push(5, 55, 99);
console.log(luckyNumbers);

favoritePeople.push("James", "Harry");
console.log(favoritePeople);
// - ==================== LEVEL 1_5 ====================
// Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben.
// .pop() entfernt jeweils NUR das letzte Element (keine Argumente/Zahlen in () möglich)

console.log("Entfernt: " + bucketList.pop());
console.log(bucketList);

console.log("Entfernt: " + luckyNumbers.pop());
console.log(luckyNumbers);

const lastFavoritePerson = favoritePeople.pop();
console.log("Entfernt: " + lastFavoritePerson);
console.log(favoritePeople);

// - ==================== LEVEL 1_6 ====================
// Die Array-Methode **shift()** ist pop() sehr ähnlich.
// Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert.
// Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne.

const firstFavoritePerson = favoritePeople.shift();
console.log("Entfernt: " + firstFavoritePerson);
console.log(favoritePeople);

// - ==================== LEVEL 1_7 ====================
// Die Array-Methode unshift() ist push() sehr ähnlich.
// Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle.
// Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen.
// Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht.

// - ==================== LEVEL 1_8 ====================

// - ==================== LEVEL 1_9 ====================

// - ==================== LEVEL 1_14 ====================
