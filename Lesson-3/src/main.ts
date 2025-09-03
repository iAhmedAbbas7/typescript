// <== FUNCTIONS ==>

// TYPE ALIASES
type stringORNumber = string | number;
type stringOrNumberArray = (string | number)[];
// INTERFACE
type Singer = {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
};
type userId = stringORNumber;
// LITERAL TYPES
let myName: "Ahmed";
myName = "Ahmed";
let userName: "Ahmed" | "Ali" | "Haris";
userName = "Ahmed";
// FUNCTIONS
const sum = (a: number, b: number): number => {
  return a + b;
};
const logMessage = (message: any): void => {
  console.log(message);
};
logMessage("Ahmed Abbas");
logMessage(sum(2, 3));
const subtract = function (c: number, d: number): number {
  return c - d;
};
type mathFunction = (a: number, b: number) => number;
interface mathFunctionInterface {
  (a: number, b: number): number;
}
const multiply: mathFunctionInterface = (c, d) => {
  return c * d;
};
logMessage(multiply(2, 20));
// OPTIONAL PARAMETERS
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
// DEFAULT PARAMETERS
const sumAll = (a: number = 10, b: number, c: number = 1): number => {
  return a + b + c;
};
logMessage(addAll(2, 2));
logMessage(addAll(2, 2, 2));
logMessage(sumAll(3, 3));
logMessage(sumAll(3, 3, 3));
logMessage(sumAll(undefined, 3));
// REST PARAMETERS
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(10, 2, 3, 4, 5));
// NEVER TYPE
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
// CUSTOM TYPE GUARDS
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
const isString = (value: any): boolean => {
  return typeof value === "string" ? true : false;
};
// USE OF NEVER TYPE
const numberOrString = (value: number | string): string => {
  if (isString(value)) return "STRING";
  if (isNumber(value)) return "NUMBER";
  return createError("This should never happen!");
};
