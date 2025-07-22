
console.log("her parent class");

class Hr
{
    dept:string;
    name:string;

    constructor(dept:string,name:string)
    {
        this.dept=dept;
        this.name=name;
    }
    printObject():void
    {
        console.log("dept:"+this.dept,"name:"+this.name);
    }

}

class  assistentCls extends Hr
{
    dept:string;
    name:string;
    constructor(dept:string,name:string)
    {
        super(dept,name);
        this.dept=dept;
        this.name=name;
    }

    public printCh():void
    {
        console.log("dept:"+this.dept);
    }
}

let parent1=new Hr("hrp","it");

const child=new assistentCls("assistent","marketing");

/// assigning the object of parent in chile which will give error
//child=parent1;// we can not assign 

parent1=child;  //here you can assign child into parent1

parent1.printObject();