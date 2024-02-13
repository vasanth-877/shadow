
const login = {
    username :"Balajothi",
    password :"Baleronaldo07",
   }
function Login(){
   //let u=document.getElementById("uname").value;
   let v=document.getElementById("user");
   //let p=document.getElementBYId("pass").value;
   let p1=document.getElementById("password");
   
   if(v.value==login.username)
   {
    if(p1.value==login.password)
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