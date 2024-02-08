let bar=document.getElementById("bar")
console.log(bar.getAttribute("class"));   //will give the name of the attribute whiich we gave in html
console.log(bar.hasAttribute("class"));   //will return true or false
//console.log(bar.setAttribute("hidden","true"));       //this willl hide the attribute
bar.setAttribute("class","true sarthak") //this will add one more attribute
bar.removeAttribute("class")  //this will remove all the classes in the bar
console.log(bar.attributes)   //giving all the attributes data
console.log(bar.dataset);
console.log(bar.dataset.game);
console.log(bar.dataset.player);
