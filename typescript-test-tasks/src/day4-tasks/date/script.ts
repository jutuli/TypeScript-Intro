// - ========================== LEVEL 1_1 =================

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const pContainer = document.querySelector<HTMLDivElement>("#container");

if (pContainer) {
  pContainer.innerHTML = `
  <p>${date1}</p>
  <p>${date2}</p>
  <p>${date3}</p>
  <p>${date4}</p>`;
}

// - ========================= LEVEL 2_1 =====================
// Task 1
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const dateFormatsHTML =
  document.querySelector<HTMLDivElement>("#dateContainer");

if (dateFormatsHTML) {
  dateFormatsHTML.innerHTML = `
<p>${day}-${month}-${year}</p>
<p>${day}/${month}/${year}</p>`;
}

// Task 2
const timeFormatsHTML =
  document.querySelector<HTMLDivElement>("#timeContainer");

if (timeFormatsHTML) {
  timeFormatsHTML.innerHTML = `
    <p>${date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    })} Uhr</p><p>${date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  })} Uhr</p>`;
}

// - ========================= LEVEL 3_2 ======================
const oldDate = new Date(0);
const nowDate = new Date();

import {
  differenceInYears,
  differenceInSeconds,
  differenceInHours,
} from "date-fns";

console.log(differenceInYears(nowDate, oldDate));
console.log(differenceInHours(nowDate, oldDate));
console.log(differenceInSeconds(nowDate, oldDate));

const myBirthday = new Date("1990-05-01 17:23:12");
console.log(differenceInYears(nowDate, myBirthday));
console.log(differenceInYears("2007-04-07", myBirthday));

console.log(myBirthday.toLocaleString("de-DE"));
console.log(
  myBirthday.toLocaleString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
);

console.log(
  myBirthday.toLocaleDateString("de-DE", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
);

console.log(
  myBirthday.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

console.log(
  myBirthday.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })
);

console.log(myBirthday.toLocaleString("de-DE", { weekday: "long" }));

console.log(myBirthday.toLocaleString("de-DE", { month: "long" }));

console.log(
  `${myBirthday.toLocaleDateString("de-DE", {
    day: "numeric",
  })} des ${myBirthday.toLocaleDateString("de-DE", {
    month: "long",
  })} im Jahre des Herrn ${myBirthday.toLocaleDateString("de-DE", {
    year: "numeric",
  })}`
);
