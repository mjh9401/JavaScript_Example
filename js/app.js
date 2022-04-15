const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const hidden_className = "hidden";
const UserName_key = "username"

function onLoginSubmit(event){
    // submit 기본 동작 막아줌
    event.preventDefault();
    loginForm.classList.add(hidden_className);
    localStorage.setItem(UserName_key,loginInput.value);
    paintGreetings();
}

function paintGreetings(){
    const userName = localStorage.getItem(UserName_key);
    greeting.innerText = "Hello " + userName;
    greeting.classList.remove(hidden_className);
}


loginForm.addEventListener("submit",onLoginSubmit);

const saveUsername = localStorage.getItem(UserName_key);

if(saveUsername == null){
    //show the form
    loginForm.classList.remove(hidden_className);
    loginForm.addEventListener("submit",onLoginSubmit);
} else{
    // show the greetings
    paintGreetings();
}