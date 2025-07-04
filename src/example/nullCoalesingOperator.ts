
let pinn='';

let ress=pinn || "default";

console.log(ress);  // it will return the default because for operator empty returns the false

let ress1=pinn ?? "default";

console.log(ress1);  // it will not  return the default .it will return empty
