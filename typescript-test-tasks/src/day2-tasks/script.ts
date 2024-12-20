// ! STRING METHODS

// ? Level 1-1

let firstName = "Julia";
let lastName = "T";

console.log(firstName.length);
console.log(lastName.length);

const fullName = firstName.concat(" ", lastName);
console.log(fullName);
console.log(fullName.length);

// ? Level 1-2
const earthQuote =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

// ? Level 1-4
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

// ? Level 1-5
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
