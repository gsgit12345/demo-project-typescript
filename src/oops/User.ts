class User {
    name: string = "rame";

    display(): void {
        console.log("ram is:" + this.name); //if you are not using the this keyword ,it will give the runtime issue.
    }
}

const user11 = new User();
user11.display();

class Dept {
    name: string;
    id: number;
    location: string;

    constructor(name: string, id: number, location: string) {
        this.name = name;
        this.id = id;
        this.location = location;
    }

    private display(): void {
        console.log("name:" + this.name, "id:" + this.id, "location:" + this.location);   //you can not access outside of this class
    }
    protected display2(): void {
        console.log("name:" + this.name, "id:" + this.id, "location:" + this.location);  //you can not access outside of this class 
    }
    public display3(): void {
        console.log("name:" + this.name, "id:" + this.id, "location:" + this.location); //you can access this outside of class
    }


}

const deptt = new Dept("ramesh", 1000, "northindia");
deptt.display3();