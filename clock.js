const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime()
{
    const time = new Date();
    const hour = time.getHours(); 
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clockTitle.innerText = `${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}:${second < 10 ? `0${second}` : second}`;
}

function init()
{
    getTime();
    setInterval(getTime,1000);
}

init();