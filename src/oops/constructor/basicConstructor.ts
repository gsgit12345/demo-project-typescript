class user13 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printUser13() {
        console.log("printing property");
    }

}

//parameterised and default constructor 

class dept21 {
    dept: string;
    id: number;

    constructor(dept: string = "", id: number = 0) {
        this.dept = dept;
        this.id = id;
    }

    printdept21(): void {
        console.log('dept is:', this.dept)
    }
}

let de = new dept21("hr");
de.printdept21();