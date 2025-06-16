console.log("array operation in typescript");

let arrdemo:number[]=[
    1,10,11,2,3,19,18
]

console.log("array push operation ");

arrdemo.push(100);
arrdemo.join("-");

console.log(arrdemo)

console.log("array shift and unshift operation ");

arrdemo.unshift(200);
console.log(arrdemo);
arrdemo.shift(); //remove the first element
console.log(arrdemo);

arrdemo.pop(); //remove the first element
console.log(arrdemo);

console.log("array splice  operation ");

arrdemo.splice(2,3);
console.log(arrdemo)


