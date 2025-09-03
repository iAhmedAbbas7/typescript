"use strict";
// <== ARRAYS, OBJECTS, TUPLES, ENUMS ==>
// ARRAYS
let stringsArray = ["Ahmed", "Ali", "Haris"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
// ARRAY METHODS
stringsArray[0] = "Rehman";
stringsArray.push("Hassan");
guitars[0] = 1984;
guitars.unshift("Jim");
guitars = [1984, "Strat"];
guitars = stringsArray;
mixedData = guitars;
mixedData = stringsArray;
let test = [];
let bands = ["Hey"];
bands.push("Van Halen");
// TUPLE
let myTuple = ["Ahmed", 25, true];
let mixedArray = ["Ahmed", 25, false];
mixedArray = myTuple;
myTuple[1] = 18;
// OBJECTS
let myObj;
myObj = [];
myObj = bands;
myObj = {};
let exampleObj = {
    name: "Ahmed",
    employed: false,
};
exampleObj.employed = true;
exampleObj.name = "Haris";
let singer1 = {
    active: true,
    albums: [2022, 2025, "Utopia"],
};
let singer2 = {
    name: "Drake",
    active: true,
    albums: [2022, 2025, "Certified Lover"],
};
singer2 = singer1;
const greetSinger = (singer) => {
    if (singer.name) {
        return console.log(`HELLO ${singer.name.toUpperCase()}`);
    }
    return console.log("HELLO!");
};
greetSinger(singer1);
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
