"use strict";
console.log("union type demo");
let user;
function getUser() {
    const name = "ram";
    const age = 100;
    user = { name: name, age: age };
    return user;
}
let value = getUser();
console.log(value);
function printStatus(message, status) {
    if (typeof status == 'string') {
        console.log(`Count is: ${message}`);
        console.log(`Count is: ${status}`);
        console.log('Count is:' + status.trim(), 'me' + message);
    }
    else {
        console.log('Count is:' + status, 'me' + message);
    }
}
printStatus('message is message', 300);
printStatus('message is message', '700');
