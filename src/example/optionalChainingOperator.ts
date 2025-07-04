console.log("optional chaining operator demo")

const userDemo={

    profile:{
        name:"hello optional chaining",
        profession:"developwer",
        age:1000,
        other:{
            local:"not available",
            global:"yes avaialble"
        },
    },
    portfolio:
    {
        linkedn:"available",
        naukri:"available",
        other:""
    }
};

console.log(userDemo.profile.other?.global);
console.log(userDemo.profile?.age);   //optional chaining operator 
console.log(userDemo.portfolio?.linkedn);   //optional chaining operator 