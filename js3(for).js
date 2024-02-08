let A=[4,5,5,67,79,48,33]
for (let index = 0; index <A.length; index++) {
   console.log(A[index])
}

let obj={
    Sarthak:"Male",
    Prabhleen:"Female",
    Gargi:"Female",
    Sarthk:"Male",
}
 
for(a in obj){                 //IN will get inside the obj
    console.log(a + " is "  + obj[a])    //a in obj meaning it will get the value and obj[a] will get the values
    
}

for(b of obj["Sarthak"]){     //Off is only for the values of obj
    console.log(b)
}