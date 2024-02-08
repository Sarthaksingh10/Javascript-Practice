 //This script is for practice and to test it add it to the promise.html page

 //This web page is about the practice of having promise inside the loadscript function 
 
 loadscript=(src)=>{                        //syntax of the loadscript function
    return new Promise((resolve,reject)=>{             //Promise inside the loadscript
let script=document.createElement("script");        //Creating a new element script
script.src=src;            //addding source to the script
script.onload=()=>{      //Operations to perform while loading
resolve(src)   //when load success the function is resolve
}
script.onerror=()=>{
reject("showing error")    //on error reject the function
}
document.body.appendChild(script)      //Use to insert the element which we created just before the body tag
     })
}
 

let prom=loadscript("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"); //assinging variable to loadscript
prom.then((value)=>{      //Using then in the variable
console.log(value)
}).catch((error)=>{      //Using catch to catch the errors
console.log("We are sorry about the error you recieve we will surely look into it for your smooth user experience");
})