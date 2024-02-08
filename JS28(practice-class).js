class practice{
    constructor(real,imaginary){
        this.real=real;
        this.imaginary=imaginary;
    }

    add(num){
        this.real=this.real+num.real;
        this.imaginary=this.imaginary+num.imaginary;

    }
}
let A=new practice(3,5);
let B=new  practice(4,5)
A.add(B);
console.log(`${A.real} + i ${A.imaginary}`);