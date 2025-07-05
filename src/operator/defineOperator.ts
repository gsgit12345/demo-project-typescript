console.log("definite assignment demo");

class Money {
    marketValue: number;
    symbol!: string;

    constructor(marketValue: number) {
        this.marketValue = marketValue;
    }

    printMony(): number {
        return this.marketValue;
    }
}

let obj = new Money(80);

console.log(obj.printMony());