"use strict";
console.log("assigning function  name demo");
function substract(num, num1) {
    return num + num1;
}
let sub;
sub = substract;
let res = sub(12, 23);
console.log('result is:', res);
//sub=100;   it will give error becaise sub is type function.if we declared sub is any then it will give runtime.
console.log("another example");
let say;
say = function () {
    console.log("hello second type function");
};
say();
console.log("another example function returning value");
let add;
add = function (x, y) {
    return x + y;
};
console.log(add(1, 2));
console.log('Arrow Function Assignment');
let sub1 = (x, y) => x - y;
console.log('result', sub1(5, 3));
console.log('function as a type example');
let subtract = (x, y) => x - y;
console.log(subtract(12, 1));
