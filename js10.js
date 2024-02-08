const prompt=require("prompt-sync")()
const randomnumber=87;
let a;
a=Number.parseInt()
insert = () =>{
    let i=0;
    do
    {
        a=prompt("Enter the number : ");
        i++
    } while(a!=randomnumber)
    console.log("your score is : ", 100-i)
}
insert()
    console.log("Congratulation you got the number right")
  
    
