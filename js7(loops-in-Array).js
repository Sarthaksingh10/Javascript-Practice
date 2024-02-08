let A=[1,2,3,4,5];
/* for (let i = 0; i < A.length; i++) {
    const element = A[i];
    console.log(element)
} */
A.forEach((element)=>{
    console.log(element*element) 
})
console.log(A)              //Array does not changes only some functions are perform over it using for each

/* let name="sarthak";
let b=Array.from(name)       //Array.from is used to convert the string to an array use in dom
console.log(b) */


for(z of A){                              //for of loop is a simple way to print the elements of the array
    console.log(z)
}

for(x in A){                //This will print the index of the element or will give the keys of array
    console.log(x)
}