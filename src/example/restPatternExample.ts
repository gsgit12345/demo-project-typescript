console.log("demo for the rest pattern")

const dept={
namep:'Fiance',
company:"abc pvt",
head:"pavan",
subhead:"xyz",
location:"somewhere"

}

let {namep,company,...restprop}=dept;

console.log('rest property demo',restprop);

console.log("demo of rest parameter in function");

function restParameterDemo(...deptt: string[])  //it is ...deptt  restparameter
{
console.log('dept is:'+deptt);
}


restParameterDemo('harsish');
restParameterDemo('harsish','navaj');
restParameterDemo('harsish','navaj',"ashis");