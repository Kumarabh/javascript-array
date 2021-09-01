
# Array Methods
 
## Unshift: 
* Adds an element to the start of an array.
```
import { arr } from "./test.js";
arr.unshift('Mountain')
console.log('array => ', arr);
```
 ---------------------------------------

## Shift: 
* Adds an element to the end of an array.
```
import { arr } from "./test.js";
arr.shift('Mountain')
console.log('array => ', arr);
```
 ---------------------------------------

 ## Slice: Clone, Copy
* Clone entire array [arr.splice()].
```
import { arr } from "./test.js";
const arr_clone = arr.splice();
console.log('array => ', arr_clone);
```

* Copy array start/end index [arr.splice(start, end)].
```
import { arr } from "./test.js";
const arr_clone = arr.splice(0,8);
console.log('array => ', arr_clone);
```

 ---------------------------------------

## splice: Insert Middle, Delete, Replace
* Adds an element to the end of an array.
```
Delete an element:

import { arr } from "./test.js";
let scores = [1, 2, 3, 4, 5];
let newArr = scores.splice(2,1)
console.log('scores => ', scores); //[1,2,4,5]
console.log('newArr => ', newArr); //[3]

```
 ---------------------------------------

