console.log("constructor returning object");

class Custom {

    message!:string;
    constructor() {
        console.log();
        return this;
    }
    // constructor(message:string)
    // {

    // }   //multiple constructor is not allowed
}


