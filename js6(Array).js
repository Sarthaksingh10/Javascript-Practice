let A=[1,2,34,5,6,9,9,2,8];
/* let B=[4,5,6,7,0,99] */

/* A[3]=22;       //This mean arrays are mutable i.e. their values can be changed during runtime or can be changed
console.log(A); */

//Shift-Will give the first element of the array  "SIZE OF THE ARRAY WILL CHANGE"
/* let b=A.shift();   
console.log(A,b); */


//pop-Will give the last element of the array      "SIZE OF THE ARRAY WILL CHANGE"
/* let c=A.pop();   
console.log(A,c); */

  //Push-Wil add the given number to the last of the array
/* let d=A.push(3);
console.log(A,d) */

//Join-Will add followed by between the array insead of a comma
/* let e=A.join(" followed by ")   
console.log(e) */

//tostring-Will convert the given array to the string
/* let f=A.toString(); 
console.log(f) */

//unshift-Will add the number in the bracket at the first position
/* let g=A.unshift(34);  
console.log(A,g) */

//delete- Will delete the element at the position we want and create a empty space  "SIZE OF THE ARRAY WILL "NOT" CHANGE"
/* let h=delete A[4];
console.log(A,h); */

//concat-Will merge 2 array to give the new string
/* let i=A.concat(B)
console.log(i,i.length) */

//sort-Will arange everything in a alphabatical order like what comes first will come first 
/* let j=A.sort();
console.log(j) */

/* const compare =(a,b) =>{
    return b-a             //This will arange the given array in the "DESCENDING" order
}
let k=A.sort(compare);
console.log(k) */

/* const compare =(a,b) =>{
    return a-b             //This will arange the given array in the "ASSENDING" order
}
let k=A.sort(compare);
console.log(k) */

 //Reverse-As the name suggest it will reverse the array
/* let l=A.reverse();
console.log(l) */
  
//slice(a,b)-It will slice out the array which will start from including the second index and end at 7th index which will not be included
/* let m=A.slice(2,7);
console.log(m) */

//splice-("starting-index","number-of-elements-to-delete", "new-numbers to add")
let n=A.splice(2,4,44,33,55);
console.log(A,n)

