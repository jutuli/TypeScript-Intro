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
const isGoingToSchool = susisStatus.slice(5, 17) + susisStatus.slice(23);
const school = susisStatus.slice(23);
const susiIsSchool = susisStatus.slice(0, 8) + susisStatus.slice(23);

document.body.innerHTML += `<p>${susi}</p>`;
document.body.innerHTML += `<p>${is}</p>`;
document.body.innerHTML += `<p>${isGoingToSchool}}</p>`;
document.body.innerHTML += `<p>${school}</p>`;
document.body.innerHTML += `<p>${susiIsSchool}</p>`;
