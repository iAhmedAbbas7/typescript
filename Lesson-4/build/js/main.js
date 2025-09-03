"use strict";
// ASSERTING TYPES TO MORE OR LESS SPECIFIC TYPES
let a = "HELLO";
// LESS SPECIFIC
let b = a;
// MORE SPECIFIC
let c = a;
// SAME WITH ANGLE BRACKET SYNTAX
let d = "HELLO";
let e = "WORLD";
// USE CASE
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
// WRONG TYPE ASSERTION - WILL THROW AN ERROR AS STRING WILL BE RETURNED
let nextVal = addOrConcat(2, 3, "concat");
// UNKNOWN TYPE
10;
// TYPE ASSERTION WITH DOM OBJECTS
// <== 1: NON NULL ASSERTION ==>
const firstImg = document.querySelector("img");
// <== 2: TYPE ASSERTION ==>
const secondImg = document.getElementById("myImg");
// <== 3: ANGLE BRACKET SYNTAX ==>
const thirdImg = document.getElementById("myImg");
firstImg.src;
secondImg.src;
thirdImg.src;
