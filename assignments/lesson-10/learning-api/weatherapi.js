var weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=93f326df890de32f33a0b6e6a3a45ee9";
weatherRequest.open("GET", apiURLstring, "true" );
weatherRequest.send();

weatherRequest.onload = function() {

    var weatherData = JSON.parse(weatherRequest.responseText)
    console.log(weatherData);

    var main = weatherData["main"];

    document.getElementById("current-temp").innerHTML = main.temp;
}