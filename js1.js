let a ="Sarthak";
let b=10;
console.log(a+b);

console.log(typeof (a+b));

const obj={
    name:"Sarthak",
    age: 19,
    education: "BTECH",
}
 
console.log(obj)

/* obj=4; */      //This will show an error

obj["name"]="Singh";
obj["friend"]="Prabhleen";

console.log(obj)
/* console.log(obj.friend+obj.name) */  //This also works we can concat two values from the object