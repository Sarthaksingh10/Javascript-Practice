//This script tag is for practice and to test it add it to the promise.html page
//  promise api

let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 3000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("value 2")
    }, 2000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error")
    }, 1000);
})

//Printing individuals will give the value one by one not depending on any of the others
/* p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value);
})
p3.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("Sorry for the error")
}) */

//Promise.all will convert the given promises all in the array form and it will give us the result ih the form of the arrray 
//But if any value got rejected we will get the error in promise.all 
//promise.all will get resolve after the last code is completed
/* let promise_all=Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
}) */

//Promise.allSettled  As promise.all will not print the error value promise.allsettled will print also the error value in the array
//Even if the error occurs we will get the status as rejected but error will not be thrown
/* let promise_allsettled=Promise.allSettled([p1,p2,p3]);
promise_allsettled.then((value)=>{
    console.log(value)
})
 */

//Promise.race   Will print the value that will happen first and if the value executing fastest has error error will be thrown by the compiler
/* let promise_race=Promise.race([p1,p2,p3]);
promise_race.then((value)=>{
    console.log(value);
}) */

//promise.any  Will print the value that will get resolve first even if the error is thrown first 
//It will not give the error it will give the resolved output
/* let promise_any=Promise.any([p1,p2,p3]);
promise_any.then((value)=>{
    console.log(value);
}) */


//Promise.resolve will give the resolve promise 
console.log(Promise.resolve(6)); 

//Promise.reject will give the rejected promise 
console.log(Promise.reject((new Error("Hello I am error"))));