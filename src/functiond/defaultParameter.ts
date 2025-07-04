console.log("default parameter in function")

function defaultDemo(num:number=100,num2:number)
{
    console.log('num:',num,'num2',num2);
}

console.log(defaultDemo(undefined,10));  //if default parameter is first one .you can call like this


function printdetail(name:string,age:number,email:string="admin@xyz.com")
{
    console.log('name:',name,'age',age,'email',email);
}

printdetail("john",100);
