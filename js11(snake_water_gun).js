const prompt=require("prompt-sync")()
let m=Math;
let userinput=prompt("S for snake, W for water , G for gun : ");
let a=1;
let b=3;
       let random1_3=Math.floor(a+(b-a)*Math.random()); 
   let random=["S","W","G"][random1_3]

   const match = (random,userinput) =>{
    if (random==userinput) {
       return 0;
    } 
    else if(random=="W" && userinput=="S") {
        return userinput;
    }
    else if(random=="S" && userinput=="W") {
        return random;
    }
    else if(random=="W" && userinput=="G") {
        return random;
    }
    else if(random=="G" && userinput=="W") {
        return userinput;
    }
    else if(random=="G" && userinput=="S") {
        return random;
    }
    else if(random=="S" && userinput=="G") {
        return userinput;
    }
   }
   let returnit=match(random,userinput);
   console.log(`Random : ${random} Userinput=${userinput}  The winner is:  `, returnit)
   
   