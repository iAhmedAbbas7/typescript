"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Fries";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
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
const student = {
    name: "Ahmed",
    GPA: 3.43,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(`${key}: ${student[key]}`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 200,
    sidehustle: 100,
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue} : ${monthlyIncomes[revenue]}`);
}
