
console.log("retrurn ")

function addNum(num:number,num1:number)
{
return num+num1;
}

var result1=addNum(10,10);

console.log('result is',result1);

function addNum2(num:number,num1:number) : number
{
return num+num1;
}

let result2=addNum2(12,13);

console.log('result is',result2);


function returnVoid(num:number,num1:number): void
{
    console.log('printing in console',num+num1);
}

console.log(returnVoid(10,20));