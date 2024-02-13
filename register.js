function validate(){
const form = document.getElementById("form");
const username = document.getElementById("uname");
const email = document.getElementById("Email");
const password = document.getElementById("Pass");
const phonenumber = document.getElementById("Ph");
let re1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let re2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let re3 = /^[0-9]{10}$/;
form.addEventListener('submit',(e)=> {
if(re1.test(password.value))
{
    return true;
    
}
else{
    alert("Invalid Password");
    password.style.border = "red solid 3px";
    e.preventDefault();
    
}

if(username.value.length >= 15)
{
    alert("Username length out of Bounds");
    username.style.border = "red solid 3px";
    
    e.preventDefault();
}
else{
    return true;
}

if(re2.test(email.value) != true)
{
    alert("Ivalid email id");
    email.style.border = "red solid 3px";
    e.preventDefault();
    
}
else{
    return true;
}

if(re3.test(phonenumber.value) != true)
{
    alert("invalid Phone Number");
    phonenumber.style.border = "red solid 3px";
    e.preventDefault();
    
}
else
{
    return true;
}

})}

