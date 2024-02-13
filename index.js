const myBox = document.getElementById("myBox");
const about = document.getElementById("about");
const login = document.getElementById("login");
const register = document.getElementById("register");
const us = document.getElementById("us");
function changeColor(event)
{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch 😞"


}
function Color(event)
{
    event.target.style.backgroundColor = "pink";
    event.target.textContent = "Noice 😊"
}
function aboutUs(event){
    document.getElementById("us").hidden = false;
}
function aboutUs1(event){
    document.getElementById("us").hidden = true;
}
function loginColor(event){
    event.target.style.color = "red";
}
function registerColor(event){
    event.target.style.color = "green";
}
function loginColor1(event){
    event.target.style.color = "white";
}
function registerColor1(event){
    event.target.style.color = "white";
}
myBox.addEventListener("click",changeColor);
myBox.addEventListener("dblclick",Color);
about.addEventListener("mouseenter",aboutUs);
about.addEventListener("mouseout",aboutUs1);
login.addEventListener("mousemove",loginColor);
register.addEventListener("mousemove",registerColor);
login.addEventListener("mouseout",loginColor1);
register.addEventListener("mouseout",registerColor1);

