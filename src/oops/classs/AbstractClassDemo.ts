abstract class Animal
{
name:string;
public constructor(name:string)
{
    this.name=name;
}

bark():void
{
    console.log("general animal class");
}
abstract genericTraits():void;

}

//abstract class implementation

class Dog extends Animal
{
    name:string;
    legg:number;
    genericTraits(): void {
        console.log("hello generic traits are implemented in child class");
    }
constructor(name:string,legg:number)
{
    super(name);
    this.name=name;
    this.legg=legg;
}
printPropSuper()
{
    console.log("super function:"+super.bark,"super property:"+this.name);
}

}

const dd=new Dog("dog",9);

console.log("name :"+dd.name,"legg is::"+dd.legg);