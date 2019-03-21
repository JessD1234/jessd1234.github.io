var weatherRequest = new XMLHttpRequest();
var townName = document.getElementById("town-name").innerHTML;
if (townName ==="Preston Idaho") {
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=93f326df890de32f33a0b6e6a3a45ee9"; }

else if (townName==="Fish Haven Idaho") {
    var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=93f326df890de32f33a0b6e6a3a45ee9";
}

else if (townName === "Soda Springs Idaho") {
    var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=93f326df890de32f33a0b6e6a3a45ee9";
}

weatherRequest.open("GET", apiURLstring, "true" );
weatherRequest.send();

weatherRequest.onload = function() {

    var weatherData = JSON.parse(weatherRequest.responseText)
    console.log(weatherData);

    updateWeather(weatherData);
    windChill(weatherData);
}

function updateWeather(weatherData) {
    
    
    var main = weatherData["main"];
    var weather = weatherData["weather"];
    var wind = weatherData["wind"];

    document.getElementById("temperature").innerHTML = Math.round(main.temp);
    document.getElementById("description").innerHTML = weather[0].description;
    document.getElementById("high").innerHTML = Math.round(main.temp_max);
    document.getElementById("low").innerHTML = Math.round(main.temp_min);
    document.getElementById("humidity").innerHTML = main.humidity;
    document.getElementById("windspeed").innerHTML = wind.speed;
}

function windChill (weatherData) {
    var info = weatherData["main"];
    var temperature = info.temp;
var windspeed = document.getElementById("windspeed").innerHTML;
    windspeed = parseFloat (windspeed);

var answer = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * (temperature * Math.pow(windspeed, 0.16)))

var prettyAnswer = answer.toFixed(1);

document.getElementById("windchill").innerHTML = "Windchill: " + Math.round(prettyAnswer) + " &deg;F";
}