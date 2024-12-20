// ! STRING METHODS

// - =============== Level 1-1 ================

let firstName = "Julia";
let lastName = "T";

console.log(firstName.length);
console.log(lastName.length);

const fullName = firstName.concat(" ", lastName);
console.log(fullName);
console.log(fullName.length);

// - =============== Level 1-2 ================
const earthQuote =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

// - =============== Level 1-4 ================
const susisStatus = "Susi is going to codingschool";

const susi = susisStatus.slice(0, 4);
const is = susisStatus.slice(5, 7);
const isGoingToSchool = susisStatus.slice(5, 17) + susisStatus.slice(-6);
const school = susisStatus.slice(23);
const susiIsSchool = susisStatus.slice(0, 8) + susisStatus.slice(-6);

document.body.innerHTML += `<p>${susi}</p>`;
document.body.innerHTML += `<p>${is}</p>`;
document.body.innerHTML += `<p>${isGoingToSchool}</p>`;
document.body.innerHTML += `<p>${school}</p>`;
document.body.innerHTML += `<p>${susiIsSchool}</p>`;

// - =============== Level 1-5 ================
const whereIsSusi = "Susi is back from codingschool";

const susi2 = whereIsSusi.substring(0, 4);
const is2 = whereIsSusi.substring(5, 7);
const school2 = whereIsSusi.substring(24);
const susiIsSchool2 = whereIsSusi.substring(0, 8) + whereIsSusi.substring(24);

document.open();
document.write(susi2 + " ");
document.write(is2 + " ");
document.write(school2 + " ");
document.write(susiIsSchool2 + " ");

// - =============== Level 1-7 ================
const samsStatus = "Sam is good at codingschool";

const badCodingschool = samsStatus.replace("good at coding", "bad at ");
const goodSchool = samsStatus.replace("coding", "");
const goodTennis = samsStatus.replace("codingschool", "tennis");

document.open();
document.write(badCodingschool + " ");
document.write(goodSchool + " ");
document.write(goodTennis + " ");

// - =============== Level 1-9 ================

const infoAboutSam = "Sam is going to codingschool";
const susi3 = "Susi";
const and = "and";

const samSchoolMovie = infoAboutSam
  .slice(0, 16)
  .concat(infoAboutSam.slice(22))
  .concat(` ${and} `)
  .concat("to the movie theater");
console.log(samSchoolMovie);

const samMovie = infoAboutSam.slice(0, 16).concat("the movie theater");
console.log(samMovie);

const susiSamSchool = susi3
  .concat(` ${and} `)
  .concat(infoAboutSam.slice(0, 3))
  .concat(" are ")
  .concat(infoAboutSam.slice(7, 16))
  .concat(infoAboutSam.slice(-6));
console.log(susiSamSchool);

const susiSamGymMovie = susi3
  .concat(` ${and} `)
  .concat(infoAboutSam.slice(0, 3))
  .concat(" are ")
  .concat(infoAboutSam.slice(7, 16))
  .concat("the gym")
  .concat(` ${and} `)
  .concat("to the movie theater");

console.log(susiSamGymMovie);

const susiSchoolMovie = susi3
  .concat(" ")
  .concat(infoAboutSam.slice(4, 16))
  .concat(infoAboutSam.slice(-6))
  .concat(` ${and} `)
  .concat("the movie theater");

console.log(susiSchoolMovie);

document.body.innerHTML += `<p>${samSchoolMovie}</p>`;
document.body.innerHTML += `<p>${samMovie}</p>`;
document.body.innerHTML += `<p>${susiSamSchool}</p>`;
document.body.innerHTML += `<p>${susiSamGymMovie}</p>`;
document.body.innerHTML += `<p>${susiSchoolMovie}</p>`;

// - =============== Level 1-11 ================

const whereIsSam = "Sam is going to school";
document.body.innerHTML += `<p>${whereIsSam.toUpperCase()}</p>`;
document.body.innerHTML += `<p>${whereIsSam.toLowerCase()}</p>`;

const samSchoolUpper = whereIsSam
  .slice(0, 3)
  .toUpperCase()
  .concat(whereIsSam.slice(3, 16))
  .concat(whereIsSam.slice(16).toUpperCase());
document.body.innerHTML += `<p>${samSchoolUpper}</p>`;
document.body.innerHTML += `<p>${whereIsSam.toUpperCase()}</p>`;
document.body.innerHTML += `<p>${whereIsSam.toUpperCase()}</p>`;
document.body.innerHTML += `<p>${whereIsSam.toUpperCase()}</p>`;

const IsGoingToUpper = whereIsSam
  .slice(0, 3)
  .concat(whereIsSam.slice(3, 15).toUpperCase())
  .concat(whereIsSam.slice(15, 24));
document.body.innerHTML += `<p>${IsGoingToUpper}</p>`;

const firstLetterCapitalized = whereIsSam
  .slice(0, 1)
  .toUpperCase()
  .concat(whereIsSam.slice(1, 4))
  .concat(whereIsSam.slice(4, 5).toUpperCase())
  .concat(whereIsSam.slice(5, 7))
  .concat(whereIsSam.slice(7, 8).toUpperCase())
  .concat(whereIsSam.slice(8, 13))
  .concat(whereIsSam.slice(13, 14).toUpperCase())
  .concat(whereIsSam.slice(14, 16))
  .concat(whereIsSam.slice(16, 17).toUpperCase())
  .concat(whereIsSam.slice(17));
document.body.innerHTML += `<p>${firstLetterCapitalized}</p>`;
