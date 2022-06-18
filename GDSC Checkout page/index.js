function Decrement1(){
  const value=document.getElementById("no-of-items-1");
  const output=parseInt(value.innerText)-1;
value.innerText=output;
if(output<0){value.innerText=0;}
}
function Increment1(){
  const value=document.getElementById("no-of-items-1");
  const output=parseInt(value.innerText)+1;
value.innerText=output;
}
function Decrement2(){
  const value=document.getElementById("no-of-items-2");
  const output=parseInt(value.innerText)-1;
value.innerText=output;
if(output<0){value.innerText=0;}
}
function Increment2(){
  const value=document.getElementById("no-of-items-2");
  const output=parseInt(value.innerText)+1;
value.innerText=output;
if(output<0){value.innerText=0;}
}
