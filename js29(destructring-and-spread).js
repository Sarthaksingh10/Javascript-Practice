//Concept of destructring
//Destructring means we use to unpack the values from array or properties from objects in distinct variables
let arr=[1,2,3,4,5,6,7,9];
/* let [a,b,c,...rest]=arr;    //This is the syntax to print the destructre arrays
console.log(a,b,c,rest);    //Rest will print the left over in the array form as it is
//=>Output=1,2,3 [4,5,6,7,9] */

//To skip the value in between
/* let [a, , ,...rest]=arr;  //We can also do it in this way in this way This way 2 and 3 are not assigned to any value 
console.log(a,rest);      //we do not need to print b and c else it will show error and 2 and 3 will not be printed
//=>Output=1[4,5,6,7,9] */

/* let {a,b}={a:11, b:22};  //we can assign value in this way also in the destructring assignment
console.log(a,b); */

//Concept of Spread Assignment - Spread assigns key value pairs to the array
/* let arr1=[11,22,33,44]
let obj1={...arr1}
console.log(obj1);     //Output=>0:11, 1:22, 2:33, 3:44
function add(a,b,c){
 return a+b+c
}
let result=add(...arr1) //if we will do this first three values will be assigned
console.log(result);   */

/* const a="the" , b="no";
const c={a,b}
console.log(c); */

let obj={
   Name:"Sarthak Singh",
   Occupation:"Student and web dev",
   Birth_year:"2004",
}

console.log({...obj, Name: "Prabhleen"}); // We can override values in the obj after opening the object obj
console.log({Name:"Prabhleen", ...obj});  //This will not update the value cause to override first object needs to get open 