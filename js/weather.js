const API_Key = "de27be3adca7264c882a21f0905a1c12";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("You live in",lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
    fetch(url).
    then(Response => Response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const City = document.querySelector("#weather span:last-child")
        City.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
