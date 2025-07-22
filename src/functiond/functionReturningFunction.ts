console.log("function returning function");


function returningFunction(num: number): Function {

    let fun = () => "hello function returning function";

    return fun;
}


const vv = returningFunction(100);

function greet(str: string): Function {
    console.log("in main function:" + str);
    return function (num: number): number {
        console.log("in inner function");
        return num * num;
    };


}


let returnFun = greet("hello function returning ");

console.log(returnFun(100));


