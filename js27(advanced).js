    A=()=>{
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Getting the output");
             }, 3000);
        });
    }
 
 (call=async ()=>{               
   let waiting1=await A();
   console.log(waiting1);
   let waiting2=await A();
   console.log(waiting2);
   let waiting3=await A();
   console.log(waiting3);
})()   //This is an example of a iife which means immediately invoked functions this means that we do not have to store the function anywhere it is called
       //And after its execution the function space is cleared and it has no effect on the global space like if i will call a waiting1,2,3 any one outside 
       console.log(waiting1); //the iife function it will show me error cause there existence is only inside the block

