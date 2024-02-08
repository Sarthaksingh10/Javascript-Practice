//This script is for practice and to test it add it to the promise.html page



//Promises are use to solve the problem of callback hell and the pyramid of doom 
/* let p1=new Promise((resolve,reject)=>{    //This is he syntex of promise
 setTimeout(() => {
    resolve(true)         //this is for the resolve
 }, 3000);
}) */
/* console.log(p1);
let p2=new Promise((resolve,reject)=>{
 setTimeout(() => {
    reject(new Error("I am an error"))   //Thi8s is for the error
 }, 3000);
})
console.log(p2);
p1.then((value)=>{       //If the value will find the value will get print It will print true 
console.log(value);}) */

/* p2.catch((error)=>{                //As the name suggest we will get the error as console format not as error format
 console.log("There is an error");
}) */
/* p2.then((value)=>{             //if we dont want to use the catch we will pass both the value inside the .then function first pass the value argument if value recieved show value
    console.log(value)},
    (error)=>{                    //If error occurs the error will get activated and .then will do same function as catch do for the error
   console.log(error)
})   */

//Promise Chaining
let p1=new Promise((resolve,reject)=>{    //This is he syntex of promise
    setTimeout(() => {
       console.log("Solving for promise chaining");   
       resolve(true)//this is for the resolve
    }, 3000);
   })
p1.then((value)=>{            //The first .then value which will work on resolve
    console.log(value);
    let p2= new Promise((resolve,reject)=>{
        resolve("24")
    })
    return p2
}).then((value1)=>{  //start of the promise chaining when the first .then ends and the code is closed we then start the new .then from its end like this
    console.log(value1);  //Each value should be named differently
}).then((value2)=>{
  setTimeout(() => {
    console.log("second last nest of then")
  }, 4000);  //This consolel will work after 4 seconds not neccessary to call value parameter
}).then((value3)=>{
    console.log(1);
     setTimeout(() => {
        console.log("Done with the promise chaining")
    }, 5000); 
}) //practiced with 3 chain of promise chaining  after end of every individual event use the new promise call