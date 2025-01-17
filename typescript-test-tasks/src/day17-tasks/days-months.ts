// - ================== LEVEL 1_1 =================
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const weekdays = () => {
  for (let day in Weekday) {
    // mit isNaN(Number(day)) wandeln wir den Key in eine Zahl um -> für z.B. "Monday" bekommen wir NaN, für 0 allerdings 0
    // => 0 wird übersprungen, Monday wird ausgegeben
    if (isNaN(Number(day))) {
      console.log(day);
    }
  }
};

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const months = () => {
  for (let month in Month) {
    if (isNaN(Number(month))) {
      console.log(month);
    }
  }
};
