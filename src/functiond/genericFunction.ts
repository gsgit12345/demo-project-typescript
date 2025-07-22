class Pincode<T>
{

    constructor(public id:T,location:T){}

public printPincode<U>(code:U):void
{
console.log("hello generic function"+code);
}
}

var pin2=new Pincode<String>("100","hyd");

pin2.printPincode<number>(100);