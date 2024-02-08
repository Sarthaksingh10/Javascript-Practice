//Q1-Write a js program to print hello and world after 2 second delay
A = (text, n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);

    });
}
(call = async () => {
    let waiting = await A("Hello", 7);
    console.log(waiting);
    let waiting1 = await A("World", 1)
    console.log(waiting1);
})()

//Q2-Write a program to find average of an array using spread assignment

let arr = [1, 2, 3, 4, 5, 6, 6, 7]
let obj = { ...arr }
console.log(obj);
average = (a, b, c, d, e, f, g, h) => {
    return (a + b + c + d + e + f + g + h) / 8
}
console.log(average(...arr));

//Q3-Write a js program that resolve promise after n seconds The functions takes n as a parameter use and iife function to execute the fuction with different values of n
(
    timing = async () => {
        let secondone = await A("This is after 1 second ", 1);
        console.log(secondone);
        let secondsfour = await A("this is after 4 second ", 4);
        console.log(secondsfour);
    }

)()

//Write a simple interest calculate using js
simpleinterest = (p, r, t) => {
    return (p * r * t) / 100;
}
console.log(simpleinterest(100, 4, 2));