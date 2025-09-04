// <== INDEX SIGNATURES ==>
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop: string = "Fries";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    const amount = transactions[transaction];
    if (typeof amount === "number") {
      total += amount;
    }
  }
  return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Dave"]);
// SECOND EXAMPLE
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}
const student: Student = {
  name: "Ahmed",
  GPA: 3.43,
  classes: [100, 200],
};
for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}
Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
});
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
// THIRD EXAMPLE
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number | string>;
const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 200,
  sidehustle: 100,
};
for (const revenue in monthlyIncomes) {
  console.log(`${revenue} : ${monthlyIncomes[revenue as keyof Incomes]}`);
}
