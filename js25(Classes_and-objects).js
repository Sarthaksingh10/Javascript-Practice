//This example explains the use of protottpe
//Prototype is use to inherit the properties of one and another in the javascript file
/* let a={
    age:24,
    name:"Sarthak",
}
console.log(a);
let p={
    run : ()=>{
    alert("hello")
}
}
p.__proto__={
    name2:"Prabhleen",
    age:20,
}
a.__proto__=p;

a.run();
console.log(a.name2) */



//Classes and objects
/* class details{                   //to make a class we first write class than name it
     age(agesofyour){                  //We make class if we have to do same work for various number of people we make a class and assign a copy of it to do samne thing repeatedly for different data but of same type
      console.log("enter your age : " + agesofyour);
    }
    name(nameofyour){
        console.log("Enter your name : " +nameofyour)
    }
}
let mydetails=new details;            //by using new we will make a new class for each and every indivindual
let frienddetails=new details;

mydetails.age(22);                       //This will give the prarameter value to the mydetails section which contains age
mydetails.name("Sarthak");
frienddetails.age(22);
frienddetails.name("Prabhleen"); */

/* class details{                
    constructor(name,rollno){
        this.rollno=rollno;
        this.name=name;
    }   
    submit(){                 
     console.log(this.name + " has taken admmission and got roll no. : " + this.rollno);
   }
   cancel(){
    this.rollno = 0
       console.log( this.name +" has withdrawn the application and has roll no: " + this.rollno)
      
   }
}
let mydetails=new details("Sarthak",2);            
let frienddetails=new details("Prabhleen",4);

mydetails.submit()
mydetails.cancel()
frienddetails.cancel() */

//concept of method overriding
class employee{
    constructor(){   //We don't have to write the constructor in the derived class it will automatically get printed a constructor is itself form in the derived classed if it is not formed in the derived class
    
        console.log("The constructor which is not called in the extended function");
    }
    login(){
        console.log(
            "Employee has login "
        );
    }

    logout(){
        console.log(
            "Employee has logged out "
        );
    }
    requestleaves(leave){
        console.log(
            "Employee has requested " + leave + " leaves - Approved" 
        );
    }
};

class programmer extends employee{    // To override we need to write the extend keyword in front of the second class and extend it with the first class 
  
 
    requestleaves(leave){
    super.requestleaves(5);             //With the help of super keyword we can access the function of the above class and it will get overrided
    console.log("Leave is approved");
 }
}

let e = new programmer;
e.login()
e.requestleaves()