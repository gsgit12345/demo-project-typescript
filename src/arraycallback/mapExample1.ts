interface user{
    name:string,
    age:number,
    address:string
}


const userArr:user[]=[
{name:"hariram",age:100,address:"jeevanpark"},
{name:"kiran",age:200,address:"delhi"},
{name:"mradule",age:300,address:"hyderabad"}
]

//concate the all name into the one string 

const nameStr=userArr.map(name=>name.name).join(",");

console.log("all name",nameStr);

//adding the age 

const allAge=userArr.map(us=>us.age+us.age);

console.log("age ",allAge);