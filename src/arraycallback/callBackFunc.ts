console.log("call back function")


function clsdemo(a:number,callMe:(s:number)=>void):number
{
  console.log("callback function example");
  callMe(a);  
  return a;
}

function clsExample(a:number):void{
    console.log('callback fumnction demo:',a);
}

console.log(clsdemo(10,clsExample));

////////////////////callback function with returning the value

function prMsg(st:string,logMsg:(s:string,d:string)=>string):string
{
    console.log("main function var:",st);

    return logMsg(st,st);
}

function addStr(s:string,b:string):string
{
    return s+b;
}
console.log(prMsg("hellocallback",addStr))


//second way of call back

setTimeout((a:number)=>{console.log("in callback function",a)},10000,20); ///here 20 is value for the callback functio  for a




