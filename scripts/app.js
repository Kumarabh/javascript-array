import { arr } from "./test.js";

const func = function () {
    const arr2 = arguments;
    return arr2.splice(0,2)
}
const result = func('string','string2','string3');
console.log(result)