"use strict";
// <== FUNCTIONS ==>
// LITERAL TYPES
let myName;
myName = "Ahmed";
let userName;
userName = "Ahmed";
// FUNCTIONS
const sum = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Ahmed Abbas");
logMessage(sum(2, 3));
const subtract = function (c, d) {
    return c - d;
};
const multiply = (c, d) => {
    return c * d;
};
logMessage(multiply(2, 20));
// OPTIONAL PARAMETERS
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// DEFAULT PARAMETERS
const sumAll = (a = 10, b, c = 1) => {
    return a + b + c;
};
logMessage(addAll(2, 2));
logMessage(addAll(2, 2, 2));
logMessage(sumAll(3, 3));
logMessage(sumAll(3, 3, 3));
logMessage(sumAll(undefined, 3));
// REST PARAMETERS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(10, 2, 3, 4, 5));
// NEVER TYPE
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// CUSTOM TYPE GUARDS
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const isString = (value) => {
    return typeof value === "string" ? true : false;
};
// USE OF NEVER TYPE
const numberOrString = (value) => {
    if (isString(value))
        return "STRING";
    if (isNumber(value))
        return "NUMBER";
    return createError("This should never happen!");
};
