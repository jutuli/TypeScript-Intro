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

// - =========================
