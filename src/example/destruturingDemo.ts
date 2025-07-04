console.log("below is object   destruturing demo");

const person={age:20,name2:'rahul'};

const {age,name2}=person;

console.log(person);

console.log('age',age,'name is',name2);

console.log("second example of destruturing ")

let emp=[100,'rahule',101,'delhi'];

let[age2,name3,empid,state]=emp;  

console.log('age:',age2,'name is',name3,'empid is:',empid,'state is',state);

//in case of object 

const emp10={
    namew:"ram",
    agew:100,
    rollNumw:101

}

let {namew,agew}=emp10;

console.log('namew:',namew,'agew',agew);


///////////////////////////array destructuring //////////////////

const age11=[10,1,12,15,19];

let [a,b,c]=age11;

console.log('a is:',a,'b is:',b,'c is:',c);


