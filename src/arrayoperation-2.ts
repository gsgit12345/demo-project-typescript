function multipleOperation()
{
let arrdemo:number[]=[1,2,3,4,5,6,7,8];
console.log("index base splice demo");
arrdemo.splice(2,0,6);
console.log(arrdemo);

console.log("map demo")

let arrMap=arrdemo.map(n=>n*2);
console.log(arrMap);

console.log("filtering demo");
console.log(arrdemo.filter(n=>n%2==0));

}



multipleOperation();