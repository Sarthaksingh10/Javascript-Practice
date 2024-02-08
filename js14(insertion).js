let a=document.getElementById("container");
/* let div=document.createElement('div')
div.innerHTML='<h1> HELLO WORLD </h1>'; */

//a.append(div)   //This mean this will add  div at the end in the div container after containers content
//a.prepend(div)  //This mean this will add  div at the start in the div container before containers content
//a.before(div)   //This means the new div is formed outside the content div both will be independent
//a.after(div)     // This means the new div will be formed after the content div both div will be independent
//a.replaceWith(div) //This will replace the old div and new div which we add through js will take over

a.insertAdjacentHTML("beforebegin",'<div class="before"> BEFORE BEGIN </div>') //AS THE NAME SUGGESTS
a.insertAdjacentHTML("afterbegin",'<div class="after"> AFTER BEGIN </div>')     //AS THE NAME SUGGESTS
a.insertAdjacentHTML("afterend",'<div class="afterend"> AFTER END </div>')      //AS THE NAME SUGGESTS
a.insertAdjacentHTML("beforeend",'<div class="beforeend"> BEFORE END </div>')   //AS THE NAME SUGGESTS