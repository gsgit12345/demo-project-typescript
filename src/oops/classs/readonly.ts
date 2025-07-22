class Tree {
    readonly name: string
    constructor(name: string) {
        this.name = name;
    }
    assignNewValue():void
    {
    //this.name="hello assigning new value"; it will give the error here .you can assign only readonly property in constructor
    console.log("name:"+this.name);
    }
}

let tree=new Tree("bargad");
tree.assignNewValue();