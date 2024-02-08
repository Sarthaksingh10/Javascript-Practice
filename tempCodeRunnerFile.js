let a=[1,2,3,45];
let b=prompt("enter value");
b=Number.parseInt(b);

while(b!=0){
   b=prompt("enter value");
   a.push(b);
}
console.log(a);