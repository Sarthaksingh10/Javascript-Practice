/* console.log(document.cookie);     //syntax to write cookies in js
document.cookie="Name=Sarthak";    
document.cookie="surname=Singh"   //This will not ovewrite the previous cookie but will add a new cookies with a semicolan
document.cookie="Name=Shweta"   //This will overwrite the name cookie and will change it to shweta but now as surname is written above so name will come later
console.log(document.cookie);

let key=prompt("Enter the key")
let value=prompt("Enter the value")

localStorage.setItem(key,value);     //This will set the key and value in the localstorage 
console.log(`The value at ${key} is ${value}`); //If we will reload and enter the same value it will rewrite the value
console.log(localStorage.getItem("color"))   //This will give the value stored in the item
localStorage.removeItem("name")  //This will remove the value strore in the item
localStorage.removeItem("input") //This will also find the key name input in the local storage and will delte the value

// localStorage.clear()  //this will clear the local storage 
console.log(localStorage.key(4));  //This will give the value of key at the given index
console.log(localStorage.length)  */  //This will give the length of the local storage

//Same as localstorage we have session storage which last only till the session is open 
//Session storage survives the page refresh but not survives the opening and closing of the tabs

window.onstorage=(e)=>{    //storage event is fired when the changes are made from somewhere else storage event will not trigger if it is changed from the same browser
    alert("changed")
    console.log(e);
}
