
class Animal {
    constructor(name) {
        this.name = name
        /*  this.name = Animal.capitalize(name) */   //Static keyword can be called int his way also
    }

    walk() {
        console.log(this.name + " has gone for the walk");
        /* console.log(Animal.capitalize(this.name) + " has gone for the walk"); */ //static function can be called this way also
    }

    static capitalize(name) {            //To make a function static we need to write the static keyword before it
        return name.charAt(0).toUpperCase() + name.substring(1, name.length)
    }

    get name(){       //This will get the name from the cosntructor
        return this._name;
    }
    set name(newname){   //This will set the value in the get
         this._name=newname;
    }
}
class shit extends Animal{
    shitting(){
        console.log( this.name + "  peed on the tyre of the car");
    }
}
 let A = new Animal(Animal.capitalize("bruno"));   //Passing parameter to the constructor    //Static keyword can be call this way also 
/* let A=new Animal("bruno") */
A.walk()
/* A.capitalize()   */                   //This is not possible as the function which is static can be called like a function 
console.log(Animal.capitalize("mark"))  //We can only call a static function using the class name before it
A.name="dobby"
console.log(A.name);
A.walk()
let B=22;
let C= new shit(Animal.capitalize("bruno"));
C.shitting()
console.log(A instanceof Animal);    //Instance of returns the true and false whether the given object exist in class or not
console.log(B instanceof Animal);   //The above will return true as A is object of class animal but b is not so it willl return false
console.log(C instanceof Animal);   //The inherited class is also the instance of the base class


//Important note that if we inherit a new class to the base class then the instance of the derived class will give true because it becomes the part 
//of the base class

