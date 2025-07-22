console.log("shorthand property initialiser");

class  Bed
{
    constructor(public type:string,private height:number,protected width:number) //this is the shorthand property initialiser
    {

    }
}

const b2=new Bed("medium",10,20);

console.log(b2.type);