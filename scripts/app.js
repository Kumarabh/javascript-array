import { test } from "./test.js";
import { customerInformation } from "./test2.js";

// customerInformation().then(data => console.log(data));
// console.log(customerData);
// let scores = [1, 2, 3, 4, 5,6,7,8,9,10];

// let arr = scores.every(element => element< 21);
// console.log('arr =>', arr)
// console.log('scores =>',scores);

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

employees.sort((x,y) => {
    console.log('x=>', x);
    console.log('y=>', y);
    return x.salary - y.salary;

})
console.table(employees)