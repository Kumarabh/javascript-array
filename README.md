
# Array Methods
 
#### Unshift: 
* Adds an element to the start of an array.
```javascript
import { arr } from "./test.js";
arr.unshift('Mountain')
console.log('array => ', arr);
```
 ---------------------------------------

#### Shift: 
* Adds an element to the end of an array.
```javascript
import { arr } from "./test.js";
arr.shift('Mountain')
console.log('array => ', arr);
```
 ---------------------------------------

 #### Slice:   COPY
* Clone entire array [arr.splice()].
```javascript
import { arr } from "./test.js";
const arr_clone = arr.splice();
console.log('array => ', arr_clone);
```

* Copy array start/end index [arr.splice(start, end)].
```javascript
import { arr } from "./test.js";
const arr_clone = arr.slice(0,8);
console.log('array => ', arr_clone);
```

 ---------------------------------------

#### splice:   CUT
* inserts an element, delete, replace.
```javascript
// Delete an element:

import { arr } from "./test.js";
let scores = [1, 2, 3, 4, 5];
let newArr = scores.splice(2,1)
console.log('scores => ', scores); //[1,2,4,5]
console.log('newArr => ', newArr); //[3]

```
 ---------------------------------------

#### indexOf:
* finds the index of an element.
```javascript
// Find index of an element:

import { arr } from "./test.js";
let scores = [1, 2, 3, 4, 5];
console.log('index of 2 => ', scores.indexOf(2)); //[1]

```
 ---------------------------------------

#### every: Determining if every element pass a test
* returns true if every element of an array passes the test.
```javascript
// Find index of an element:

let scores = [1, 2, 3, 4, 5,6,7,8,9,10];
let arr = scores.every(element => element< 21);

```
 ---------------------------------------

#### sort
* Array sort() method to sort arrays of numbers, string, and objects.
```javascript
// sort numbers in ascending order

let scores = [1, 2, 3, 4, 5,6,7,8,9,10];
scores.sort((a, b) => a - b);
OR
scores.sort();

```

```javascript
// Sort an Object:

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

```

 ---------------------------------------

 #### filter: 
* returns new array with filtered elements in different array.
```javascript
// Find index of an element:
example-1
let arr = ['Los Angeles','New York','Chicago','Houston','Philadelphia'];
let cities = arr.filter(city => city.length > 8);

```

```javascript
// Find index of an element:
example-1
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let bigCities = cities.filter(city => city.population > 3000000);
console.log(bigCities);

// OUTPUT
[
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 }
]
```

 ---------------------------------------

  #### map: 
* Take an array, transform its element and include its result in different array.
```javascript
// Find index of an element:

let arr = ['Los Angeles','New York','Chicago','Houston','Philadelphia'];
let result = arr.map(city => city.toUpperCase())

```
 ---------------------------------------