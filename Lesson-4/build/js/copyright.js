"use strict";
// SETTING YEAR THROUGH TYPE ASSERTION
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.innerHTML = thisYear;
