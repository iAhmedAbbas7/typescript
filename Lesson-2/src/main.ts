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
let bands: string[] = ["Hey"];
bands.push("Van Halen");

// TUPLE
let myTuple: [string, number, boolean] = ["Ahmed", 25, true];
let mixedArray = ["Ahmed", 25, false];
mixedArray = myTuple;
myTuple[1] = 18;

// OBJECTS
let myObj: object;
myObj = [];
myObj = bands;
myObj = {};
let exampleObj = {
  name: "Ahmed",
  employed: false,
};
exampleObj.employed = true;
exampleObj.name = "Haris";
interface Singer {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}
let singer1: Singer = {
  active: true,
  albums: [2022, 2025, "Utopia"],
};
let singer2: Singer = {
  name: "Drake",
  active: true,
  albums: [2022, 2025, "Certified Lover"],
};
singer2 = singer1;
const greetSinger = (singer: Singer) => {
  if (singer.name) {
    return console.log(`HELLO ${singer.name.toUpperCase()}`);
  }
  return console.log("HELLO!");
};
greetSinger(singer1);

// ENUMS
enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}
console.log(Grade.U);
