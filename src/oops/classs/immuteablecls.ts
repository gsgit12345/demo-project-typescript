console.log("immutable class");

class AppConfig {
    readonly driver: string;
    readonly dbName: string;
    readonly port: number;

    constructor(driver: string, dbName: string, port: number) {
        this.driver = "oracle driver";
        this.dbName = "oracle";
        this.port = 9090;

    }

    getDriver(): string {
        return this.driver;
    }
    getDbName(): string {
        return this.dbName;
    }
    getPort(): number {
        return this.port;
    }
}

let appconfig=new AppConfig("oracled","oracle",80);

//appconfig.dbName="sql"  //can not reassign

console.log(appconfig.getDriver());