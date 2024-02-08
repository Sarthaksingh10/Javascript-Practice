let children=document.body.firstChild;   //This will take all the comments and the empty spaces between the elements
let elechildren=document.body.firstElementChild;  //This will give only valid html elements no space will be counted

console.log(children)           //This will give the text which is the empty space
console.log(elechildren)       //This will give the nav as the result

/* console.log(document.body.parentElement) //This will give the html
console.log(document.body.parentNode) */ //this will also give the html

console.log(document.documentElement.parentNode)   //This will give the document
console.log(document.documentElement.parentElement) //this will give null