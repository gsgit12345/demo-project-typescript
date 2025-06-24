"use strict";
console.log("never type demo");
function printVoid(mess) {
    console.log(mess);
}
function createError(errorMessage, errorCode) {
    throw { error: errorMessage, code: errorCode };
}
console.log(printVoid("hello error"));
console.log(createError("error", 300));
