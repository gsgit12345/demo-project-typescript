console.log("union type demo");

let user : {name:string,age:number} | null;

function getUser()
{
    const name="ram";
   const age=100;
   user={name:name,age:age};
   return user;

}

let value=getUser();

console.log(value);

function printStatus(message:string,status:number | string)
{
    if(typeof status =='string')
    {
    console.log(`Count is: ${message}`);
    console.log(`Count is: ${status}`);
    console.log('Count is:'+ status.trim(),'me'+message);
    }else
    {
        console.log('Count is:'+ status,'me'+message);

    }


}

printStatus('message is message',300);
printStatus('message is message','700');