console.log("optional constructor demo");

class hr {
    name?: string;
    salary?: number;

    constructor(name?: string, salary?: number) {
        this.name = name;
        this.salary = salary;
    }

    public printHr() {
        console.log("name is", this.name, "slary:" + this.salary);
    }
}

let hrob = new hr("", 0);

hrob.printHr();