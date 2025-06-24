
console.log("never type demo")

function printVoid(mess:string) :void 
{
    console.log(mess);
}

function  createError(errorMessage:string,errorCode:number) :never
{
    throw{error: errorMessage ,code:errorCode};
}

console.log(printVoid("hello error"));
console.log(createError("error",300));