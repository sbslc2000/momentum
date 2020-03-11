
const COORD_LS = "coords";
const API_KEY = "0c7f98ef6b1a34ecc1c8c34090930860"

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

    }
}

function init()
{
    loadCoords();
}

init();