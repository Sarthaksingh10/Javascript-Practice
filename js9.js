const prompt=require("prompt-sync")()
//Q1 and Q2-To take input from user and take until the input is 0
/* let a=[1,2,3,45];
let b=prompt("enter value");
b=Number.parseInt(b);

while(b!=0){
b=prompt("enter value")
   a.push(b);
   
}
console.log(a) */



//Q3-To give the number out of array which are divisible by 10
/* let c=[10,20,35,40];
let d=c.filter((c)=>{
    return c%10==0
})
console.log(d) */

//Q4-to print  the square of the given array
/* let e=[1,2,4,5];
let f=e.forEach((element)=>{
    console.log(element*element)
}) */

//Q5-Use reduce to calculate the factorial of a given number
/* let emptyarray=[];
let n=prompt("enter value");
n=Number.parseInt(n)
for (let i = 0; i < n; i++) {
    console.log(i+1);
   emptyarray.push(i+1);
}
console.log(emptyarray);


let j=emptyarray.reduce((h1,h2) =>{
     return h1*h2
})
console.log(j) */


