abstract class Supercls
{
    name:string;
    type:string;

    constructor(name:string,type:string)
    {
        this.name=name;
        this.type=type;
        console.log("super class constructor call");
    }

    superFun():void
    {
        console.log("hello super fun"+this.name+":type is:"+this.type);
    }

    public abstract  Childprint():void   //this is right way

}

class Childcls extends Supercls
{
    public Childprint(): void //this is right way
    {
        console.log("child class function");
    }
    name:string;
    type:string;

    constructor(name:string,type:string)
    {
        super(name,type)  //it is mandatory.if you will not give here it will give compile time error
        this.name=name;
        this.type=type;
    }


}


const  parentOb=new Childcls("parentclass","parent");

console.log(parentOb.superFun());