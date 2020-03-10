
const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greeting =   document.querySelector(".js_greeting");

const SHOWING_CN = "showing",
    USER_NM = "currentUser";

function saveName(text)
{
    localStorage.setItem(USER_NM,text);
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}


function askForName() 
{
    form.classList.add(SHOWING_CN); 
    form.addEventListener("submit",handleSubmit);
}





function paintGreeting(text)
{
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!, always better than yesterday.`;
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_NM)
    if (currentUser === null)
    {
        askForName();
    }
    else
    {
        paintGreeting(currentUser);
    }
}


function init()
{
    loadName();
}

init();