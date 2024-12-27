// - ========================== LEVEL 1_1 =================

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

const p1 = document.querySelector<HTMLParagraphElement>("p:nth-of-type(1)");
const p2 = document.querySelector<HTMLParagraphElement>("p:nth-of-type(2)");
const p3 = document.querySelector<HTMLParagraphElement>("p:nth-of-type(3)");
const p4 = document.querySelector<HTMLParagraphElement>("p:nth-of-type(4)");

if (p1) {
  p1.innerText = date1.toString();
}
if (p2) {
  p2.innerText = date2.toString();
}
if (p3) {
  p3.innerText = date3.toString();
}
if (p4) {
  p4.innerText = date4.toString();
}
