console.log("high order function that return a function and take a function as input")

function helloFun(num:number,callback:()=>void):void{

console.log("function taking input ");
let hh=callback();

//if(hh==100)   //it will give error
//{
    console.log("true"+hh);
//}


}

function say3():number 
{
console.log();
return 100;
}

helloFun(10000,say3); //because in helloFun() callback() returning void