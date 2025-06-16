

let apple:string[] =["ram","shym","khushi"];

apple.push("hello");

console.log(apple);

//printing the array using for loop

for(let i=0;i<apple.length;i++)
{
console.log(apple[i]);
}

//second of printing array

for(let n  of apple  )
{
    console.log(n);
}

//third way of printing the array

apple.forEach((num)=>{
    console.log("num is::"+num);
});

//printing the array in different format

for(let m of apple)
{
    console.log(apple.join(","));
}

console.log("=========printing array in format======================");
console.log(apple.join("-"));

console.log(apple.forEach((n)=>{
console.log("array is::"+n); //it will give the undefined
}));