let x=document.getElementById("menu")
let mee=document.querySelector("mee")
function openMenu(){
   x.style.display="block"
}
 dark.add.EventListener("click", darkMode)
 function darkMode(){
   document.body.style.background="black"
   document.body.style.color="white"
   document.header.style.background="black"
   alert("dark mode activated")
 }
   let y=document.getElementById("reg")
  reg =document.addEventListener("click" ,opMenu )
  function opMenu(){
    reg.style.display="block"
    
    if(reg.style.display=="block"){
      alert("Pls fill the input to register")
    }
  }
  
    let p=document.getElementById("part")
    part=document.addEventListener("click",lastMenu ) 
    function lastMenu(){
      part.style.display="block"
      alert("thanks for registering to mac-fragrance where u can buy luxry perfume  smell good is our priority" )
    }
      let a=document.getElementById("name2")
      name2=document.addEventListener("click" ,submit3)
    function submit3(){
        alert("registered sucessfull")
    }