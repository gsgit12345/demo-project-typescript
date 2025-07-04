console.log("spread operator demo ");

const hrName:string[]=['harish','suresh','mahesh','sheetal','kaushal'];

console.log(hrName);

console.log('spread operator:',...hrName);

///////cloning the array using shallow copy 

let hrCopy=hrName;

console.log('shallow copy',hrCopy);

hrCopy.push("rohit tyagi");

console.log("copy arr,",hrCopy,'original array',hrName);

////////////creating shallow copy 

let hrCopy2=[...hrName,"unis"]; //original array would not be affected

hrCopy2.push("hello");

console.log('hrcopy2',hrCopy2,'hrname originlarr:',hrName);

// extracting object property using spread operator

const land={
    area:100,
    name:'hyderabad',
    pincode:10017
}

let landCopy={...land,size:200,loacation:'premium'};

let landCopy1={size:200,loacation:'premium',...land};

console.log('extracting property from land',landCopy);

console.log('extracting property from land',landCopy1);


