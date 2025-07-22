class  Property<T>
{
public type:T;
public location:T;
public price:number;

constructor( type:T, location:T, price:number) //if you are annotating the public then it will give the error
{
    this.type=type;
    this.location=location;
    this.price=price;
}
public printDetail():void
{
    console.log("type:"+this.type+":location:"+this.location+":price:"+this.price);
}

}

const prop=new Property<String>("villa","noida",100);

prop.printDetail();