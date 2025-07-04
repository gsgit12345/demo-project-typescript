console.log("different type of function declaration");

sum1(20);

function sum1(num:number)
{
console.log(num)
}
/// the above is called as function declaration
sum1(10);

console.log("function expression ")

const sayHello1 = function(a:number,b:number):number{
    return a+b;
}

console.log(sayHello1(10,23));

//second way function expression  using arrow operator

const sum2=(s:string,b:string):string=>s+b;   //if you are function then it will give error.it is single lione arrow function

console.log(sum2('hello','java'));

///multiline arrow function 

const  multyply=(a:number,b:number):number=>{
    console.log('a is:',a,'b is :',b);
    return a+b;
}

console.log(multyply(12,34));

//another way of declaration of funtion using arrow operator

const disp:(a:number)=>number=a=>a+100;

const disp2:(a:number,b:number)=>number=(d,f)=>d+f;   //here d and f is input to the function

console.log('with two parameter',disp2(20,20));