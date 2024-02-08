/* const prompt=require("prompt-sync")() */
//Synchronous code ->Next line will not execute untill the previous line does not gets executed
/* let name=prompt("What is your name?");   
let age=prompt("What is your age?");    //Untill the name will not execute it willl not proceed to the next line of code
console.log("My name is " + name + " and I am " + age + " Years old"); */

//Asynchronous code ->The code executes nothing is depend on one an another for example settimeout
/* console.log("Start");
setTimeout(() => {
    console.log("This is the example of asynchronous code");    //This will print after 3 seconds and will not effect the next line of code
}, 3000);
console.log("end") */

function loadscript(src,Callback){
    let script=document.createElement("script");
    script.src=src;
    script.onload=function(){
     console.log("load with src : " + src );
    Callback();
    }
    document.body.appendChild(script);
}

function hello(){
    console.log("hello world");
}

function greeting(){
    console.log("Good Morning");
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello);