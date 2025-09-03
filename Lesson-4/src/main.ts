// <== TYPESCRIPT ASSERTIONS/CASTING ==>
type One = string;
type Two = string | number;
type Three = "HELLO";

// ASSERTING TYPES TO MORE OR LESS SPECIFIC TYPES
let a: One = "HELLO";
// LESS SPECIFIC
let b = a as Two;
// MORE SPECIFIC
let c = a as Three;
// SAME WITH ANGLE BRACKET SYNTAX
let d = <One>"HELLO";
let e = <number | string>"WORLD";
// USE CASE
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
let myVal: string = addOrConcat(2, 3, "concat") as string;
// WRONG TYPE ASSERTION - WILL THROW AN ERROR AS STRING WILL BE RETURNED
let nextVal: number = addOrConcat(2, 3, "concat") as number;
// UNKNOWN TYPE
10 as unknown as string;
// TYPE ASSERTION WITH DOM OBJECTS
// <== 1: NON NULL ASSERTION ==>
const firstImg = document.querySelector("img")!;
// <== 2: TYPE ASSERTION ==>
const secondImg = document.getElementById("myImg") as HTMLImageElement;
// <== 3: ANGLE BRACKET SYNTAX ==>
const thirdImg = <HTMLImageElement>document.getElementById("myImg");
firstImg.src;
secondImg.src;
thirdImg.src;
