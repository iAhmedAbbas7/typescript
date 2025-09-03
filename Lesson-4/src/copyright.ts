// SETTING YEAR THROUGH TYPE ASSERTION
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.innerHTML = thisYear;
