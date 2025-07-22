console.log("singleton class demo");

class Singleton {
    private static singletonCls: Singleton;

    public static getObject(): Singleton {
        if (!Singleton.singletonCls) {
            Singleton.singletonCls = new Singleton();
        }
        return this.singletonCls;
    }

    private constructor() {
        console.log("singleton class created");
    }

    public sayHello(): void {
        console.log("singleton class demo function");
    }
}

const singleOb = Singleton.getObject();

singleOb.sayHello();

const single = Singleton.getObject();
singleOb.sayHello();

if (singleOb == single) {
    console.log("true");
} else {
    console.log("false");

}