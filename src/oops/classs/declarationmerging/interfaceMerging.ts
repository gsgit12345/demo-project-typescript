console.log("interface merging")

interface Podd {
    name: string;

}

interface Podd {
    name: string;
    containerType: string;
}

const u: Podd = {     //this is the interface merging
    name: "docker",
    containerType: "mongo"
}

console.log(u.name,u.containerType);

interface xyz
{
 say():void;

}
class intmerge implements Podd ,xyz
{
name:string;
containerType:string;

constructor(name:string,containerType:string)
{
    this.name=name;
    this.containerType=containerType;
}
    say(): void {
        throw new Error("Method not implemented.");
    }
}