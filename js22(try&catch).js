setTimeout(() => {
    console.log("this is the independent code which is not the part of try and catch");
}, 1000);

try{                                  //Try and catch both goes together try works for synchronous code that is if we schedule something inside try that code will not get executed
    /* console.log(rahul)    */      //If we will put the asynchronous code in the try it will show the error   
throw new Error/* ReferenceError */("This is the error thrown by the throw syntax")
return;
}
/* try{                                //this try will give the error as we habe asynchronous code in it
    setTimeout(() => {
        console.log(hello)
    }, 100);
} */
catch(error){                      //catch cathes the error and will not give the error in the red format 
    console.log("This is the syntax for the error in try and catch :" + error)
    console.log(error.name);     //This will give the name of the error we have assigned by the throw or the error in the code
    console.log(error.message);  //This will give the reason for the code to not run and what is the problem
    
}
finally{        //Finally will work in anty case whatever it is if the error occurs or the programn run smoothely the finally willl work in any cases
    console.log("If anthing does not work I will work");
    //Even if we will return in the try syntax still finally will execute before the outer code of the syntax
}

/* setTimeout(() => {
    console.log("this is the independent code which is not the part of try and catch part 2");
}, 2000);
setTimeout(() => {
    console.log("this is the independent code which is not the part of try and catch part 3");
}, 3000);
setTimeout(() => {
    console.log("this is the independent code which is not the part of try and catch part 4");
}, 4000); */