//Q1 write a program to load a loadscript file in a browser using promises use .then() to display an alert when the load is complete
/* const loadscript = async(src)=>{
return new Promise((resolve,reject)=>{
   let script=document.createElement("script")
    script.src=src;
   
     script.onload =()=>{
                resolve(src + "  done")
    }
   document.head.appendChild(script)
})
} */

//problem 1
/* let p =  loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"); 
p.then((result) => {
    console.log(result + "  Thankyou");
}).catch((err) => {
    console.log("sorry for the error");
}); */


//Q2 Similarly solving the above questiuon number 1 using async await function
/* const main = async () => {
    let p = await loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"); 
 console.log(p);
}
main(); */

//Q3 Create a promise which rejects after 3 seconds use an async await to get its value use a try catch to handle its error

/*     let promise2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject(new Error("This is an error"))
        }, 3000);
    })
  
    let answer=async()=>{
        try{
        let a=await promise2
        console.log(a);
    }
 
 catch (error) {
    console.log("Really sorry you got an error");
}}
answer()
 */
/* Q4 Write a program using promise.all() inside an async/await to await 3 promises compare its results with the cas4e where we await these
 promises one by one */
let p1= async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10)
        }, 1000);
    })
}
let p2= async () =>{
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        resolve(20)
       }, 2000);
    })
}
let p3= async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(30)
            
        }, 3000);
       
    })
}
 const run=async ()=>{
    console.time("run")
    let a1=await p1();
    let a2=await p2();
    let a3=await p3();
  /*   console.log(a1,a2,a3); */
   let output=await Promise.all([a1,a2,a3])
   console.log(output);
   console.timeEnd("run")
   
 }
 run()