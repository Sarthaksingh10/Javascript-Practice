const prompt=require("prompt-sync")()
//Q1
/* let a=prompt("enter the number");
a=Number.parseInt(a)
if (a<=20 && a>=10) {
    alert("The entered number is between 10 and 20 in which 10 and 20 are included")
} else {
    alert("Not between the given interval")
} */

//Q2
/* let age=prompt("if below 18 enter 10 and if above 18 enter 20")
switch (age) {
    case "20":
        alert("you can drive")
        break;
    case "10":
        alert("you cannot drive")
        break;

    default:
        alert("choose between 10 and 20")
        break;
} */

//Q3 and Q4
/* let num=prompt("Enter the number");
let two=num%2;
let three=num%3;
if (two==0 && three==0) {
    alert("The number is divisible by both 2 and 3")
} else if(two!=0 && three!=0){
    alert("The number is neither divisble by 3 nor 2")
}
else if(two==0 && three!=0){
    alert("the number is only divisible by 2 not by 3")
}
else if(two!=0 && three==0){
    alert("The number is only divisible by three")
}
else(alert("please enter a valid number")) */

//Q5
let age=prompt("enter the age");
let printing= (age>18? "you can drive" : "you can not drive")
console.log(printing)