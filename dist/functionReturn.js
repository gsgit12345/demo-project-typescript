"use strict";
console.log("retrurn ");
function addNum(num, num1) {
    return num + num1;
}
var result1 = addNum(10, 10);
console.log('result is', result1);
function addNum2(num, num1) {
    return num + num1;
}
let result2 = addNum2(12, 13);
console.log('result is', result2);
function returnVoid(num, num1) {
    console.log('printing in console', num + num1);
}
console.log(returnVoid(10, 20));
