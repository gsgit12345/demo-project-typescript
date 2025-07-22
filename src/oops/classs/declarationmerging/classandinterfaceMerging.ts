class Windoww {
    name: string;
    size: number
    constructor(name: string, size: number, location: string) {
        this.name = name;
        this.size = size;
        this.location = location;
    }
}

interface Windoww {
    name: string;
    location: string;


}

let wind = new Windoww("wind", 11, "south");

console.log("location:" + wind.location, "name:" + wind.name, "location:" + wind.location);