console.log("assigning function  name demo");

function  substract(num:number,num1:number)
{
    return num+num1;
}

let sub : Function;
 sub=substract;

let res=sub(12,23);
console.log('result is:',res);

//sub=100;   it will give error becaise sub is type function.if we declared sub is any then it will give runtime.

console.log("another example")

let  say:() => void 

say=function()
{
    console.log("hello second type function");
}
say();

console.log("another example function returning value");

let  add : (num:number,num1:number) => number ;

add =function(x,y){

    return x+y;
}
console.log(add(1,2));

console.log('Arrow Function Assignment')

let sub1 : (a:number,b:number)=>number=(x,y)=>  x-y;

console.log('result',sub1(5,3));

console.log('function as a type example');

type mathType = (n: number, m: number) => number;

let subtract: mathType = (x, y) => x - y;

console.log(subtract(12,1));

