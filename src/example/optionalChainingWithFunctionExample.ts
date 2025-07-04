console.log("optional chaining operator with function example ")

type ApiResponse={
   user?:{
       name:string,
       post?:Array<{
         title:string,
         comments?:string[],
         getSummary?:()=>string


       }>;
   };

};

//above is declaration of the ApiResponse and property

const response: ApiResponse={
    user:{
        name:"Rahul",
        post: [ {
          title:"hare ram",
          comments:["kk","pp"],
          getSummary:()=>"hhhhhhhhhhhhhhhhhhhh",
 
        }
        ],
    },
 
 };
 const summary = response.user?.post?.[0]?.getSummary?.();

console.log(summary)


/////////////second example .lets consider we have list of products coming from database

let product:[
    {name:"mobile",price:1000,details:{color:"red",ram:100}},
    {name:"book",price:1000,details:{color:"red",pages:100,author:"raheem"}}, 
    {name:"T-Shirt",price:1000,details:{color:"red",fabric:"cotton",company:"vmart"}}, 
]
