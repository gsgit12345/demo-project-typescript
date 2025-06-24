"use strict";
console.log("demo for call back function");
function greek(say) {
    console.log("call back function example");
    say();
}
greek(() => {
    console.log("callback functioned is called  without no return and without no input");
});
console.log("callback function example  with the function returning");
function fnLocation(south, east, fnPinCode) {
    fnPinCode(south);
}
function printLocation(a) {
    console.log('location is ', a);
}
fnLocation("east", "west", printLocation);
console.log("using type alias for callback function");
function printPin(a, b, hello) {
    hello("hello type funexample");
}
const add11 = (x) => console.log("hello call back");
//const subtract11: mathType1 = (x, y) => x - y;
//const multiply: mathType1 = (x, y) => x * y;
printPin(10, "hello", add11);
