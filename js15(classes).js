let div=document.getElementById("container")
div.className="yellow";  //There will be red but yellow will takeover 
div.classList.remove("yellow"); //The yellow will get removed because the yellow is added so all the class will get remove
div.classList.add("red")  //Now this will show the red cause what is written after has the highest priority
console.log(div.classList.contains("red"))  //contains shows true or false
 


/* setTimeout(() => {
    console.log("Hello world")
}, 2000);

setInterval(() => {
    console.log("hellow world")
}, 2000); */

let date= new Date();
setInterval(() => {
    div.innerText=date
}, 1000);     //this will give the time which will change every second
