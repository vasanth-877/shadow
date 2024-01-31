//import {u,p} from './register.js'
function Login(){
   //let u=document.getElementById("uname").value;
   let v=document.getElementById("user").value;
   //let p=document.getElementBYId("pass").value;
   let p1=document.getElementById("password").value;
   if(v=="Balajothi")
   {
    if(p1=="Baleronaldo07")
    {
        location="Home.html";
    }
    else{
        alert("Incorrect detail password");
        document.getElementById("user").style.border="red";
    }
   }
   else{
    alert("Incorrect detail username");
    document.getElementById("user").style.border="red";
   }
  
}