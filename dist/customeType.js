"use strict";
console.log("custome type");
function getUser1(user1) {
    console.log("age is:" + user1.age, "name is:" + user1.name);
}
function doVoting(user2) {
    console.log("voterTYpe is:" + user2.voterType, "nampincode e is:" + user2.pinCode);
}
const user1 = {
    name: "ram",
    age: 23,
    pinCode: "1234",
    voterType: "state"
};
getUser1(user1);
doVoting(user1);
