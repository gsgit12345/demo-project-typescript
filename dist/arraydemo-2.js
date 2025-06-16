"use strict";
console.log("diferent type authentication in typescript");
const num = [1, 2, 3, 4, 5, 6, 78];
for (let n of num) {
    console.log(n);
}
console.log("mixed type array");
let mixedarray = [1, "hello", 23];
mixedarray.forEach((n) => {
    console.log(n);
});
console.log("array of object demo");
let objarr = [
    {
        id: 100,
        age: "hello i am obj property"
    },
    {
        id: 200,
        age: "hello i am obj property"
    }
];
console.log(objarr);
console.log("read only array");
const readonlyarr = [
    1, 2, 3, 4
];
//readonlyarr.push(3)//error push property would not be in typescript
console.log(readonlyarr.join("-"));
