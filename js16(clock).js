setInterval(function(){const clock=new Date()
const clockhours=clock.getHours();
const clockminutes=clock.getMinutes();
const clockseconds=clock.getSeconds();

let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

hours.innerHTML=clockhours;
minutes.innerHTML=clockminutes;
seconds.innerHTML=clockseconds;
}, 1000)

