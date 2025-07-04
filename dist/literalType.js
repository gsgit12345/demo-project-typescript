"use strict";
console.log("literal type example");
let direction; //this is union 
let ans; //this is alos union
function switchRole(role) {
    switch (role) {
        case 'admin':
            console.log("admin role");
            break;
        case 'developer':
            console.log("developer role");
            break;
        case 'readwrite':
            console.log("readwrite");
            break;
        default:
            console.log("unknown error message");
    }
}
switchRole('readwrite');
