let a=[1,2,3,4,5,6,8]
let b=a.map((value,index,array)=>         //map will make a new array but will not change the original array in foreach 
{                                         //for each it works on each element map works on whole array
    console.log(value,index,array);
    return value+1;             //This will increase the value of each element of array by 1 IF We will not do console log still the map function will run and will print in the format the value the index and the array
})
/* console.log(b)     */                               //Output will print value of each index each index number and array  "output is array"


let c=a.filter((a)=>{        //It will filter the condition in the array
    return a<5
})
console.log(c)               //output will display only values which will satisfy the condition  "output is array"

let d=a.reduce((h1,h2)=>{        //It will reduce the function all the way and will give a single result 
    return h1*h2                 //It will not perform operation on each element but will give a single result
})                               //first element 1 will get multiplied by second element than their result by next element so on.
console.log(d,typeof d)                 //output will print a final result multiplyinng all values in array "output is number"