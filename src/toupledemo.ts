

console.log("touple demo");

let employee:[number,string,string,number]=[100,"harish","account",1001];

employee.push("100"); //here it will not give the issue and push the element at the end

console.log(employee);

//employee[3]="rohit"; //it will give the error if you are going to assign another datatype

//optional value in tuple

let department:[string,number,boolean,string?]=["hr",100,true];

console.log("optional tuple:"+department);

department=["raj",1000,false,"shaheed@yahoo.com"];
console.log("optional tuple with value:"+department);
