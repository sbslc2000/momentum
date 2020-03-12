const weather = document.querySelector(".js-weather");
const COORD_LS = "coords";
const API_KEY = "0c7f98ef6b1a34ecc1c8c34090930860"


function getWeather(lat,lon)
{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}@${place}`;
    });
}

function saveCoords(coords)
{
    localStorage.setItem(COORD_LS,JSON.stringify(coords));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);

}

function handleGeoError(position)
{
    console.log("Can't access to location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORD_LS);
    if (loadedCoords === null)
    {
        askForCoords();
    } 
    else
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init()
{
    loadCoords();
}

init();