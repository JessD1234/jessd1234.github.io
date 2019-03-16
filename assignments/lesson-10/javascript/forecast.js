var section = document.querySelector("article");
var forecastRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=93f326df890de32f33a0b6e6a3a45ee9";
forecastRequest.open("GET", apiURLstring, "true" );
forecastRequest.send();

forecastRequest.onload = function() {

    var forecastData = JSON.parse(forecastRequest.responseText)
    console.log(forecastData);

    forecast(forecastData);
}

function forecast(forecastData) {
    /*var info = forecastData["list"];*/
    
    
    var weatherPictures = ["<img src=\"images/cloudy.jpg\" class=\"weather-icon\">", "<img src=\"imgaes/heavy-rain.jpg\" class=\"weather-icon\">", "<img src=\"images/lightning-rain.jpg\" class=\"weather-icon\">", "<img src=\"images/light-rain.jpg\" class=\"weather-icon\">", "<img src=\"imgaes/misty.jpg\" class=\"weather-icon\">", "<img src=\"imgaes/snow.jpg\" class=\"weather-icon\">", "<img src=\"images/sun2.png\" class=\"weather-icon\">", "<img src=\"images/broken-clouds.jpg\" class=\"weather-icon\">", "<img src=\"images/part-sun.jpg\" class=\"weather-icon\">"];

    for (i = 0; i < forecastData.list.length; i++ ) {
        var dateTime = forecastData.list[i].dt_txt;
        if (dateTime.includes("18:00:00")) {
            var date = new Date(forecastData.list[i].dt * 1000);
            var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var findDate = dayOfWeek[date.getDay()];


            var temperature = forecastData.list[i].main.temp;
            
            var forcastArticle = document.createElement("article");
            var day = document.createElement("h2");
            var weatherPic = document.createElement("div");
            var forcastTemp = document.createElement("p");


            day.innerHTML = findDate;
            forcastTemp.textContent = Math.round(temperature) + " °F";


            forcastArticle.appendChild(day);
            forcastArticle.appendChild(forcastTemp);

           var iconcode = forecastData.list[i].weather["0"].icon;

            if (iconcode === "01d") {
                weatherPic.innerHTML = weatherPictures[6];
            }
                else if (iconcode === "04n") {
                    weatherPic.innerHTML = weatherPictures[0];
                }
                else if (iconcode === "11d") {
                    weatherPic.innerHTML = weatherPictures[2];
                }
                else if (iconcode === "10d") {
                    weatherPic.innerHTML = weatherPictures[3];
                }
                else if (iconcode === "09d") {
                    weatherPic.innerHTML = weatherPictures[1];
                }
                else if (iconcode === "13d") {
                    weatherPic.innerHTML = weatherPictures[5];
                }
                else if (iconcode === "50d") {
                    weatherPic.innerHTML = weatherPictures[4];
                }
                else if (iconcode === "02d") {
                    weatherPic.innerHTML = weatherPictures[7];
                }

                else if (iconcode === "03d") {
                    weatherPic.innerHTML = weatherPictures[8];
                }
    
            forcastArticle.appendChild(weatherPic);
            section.appendChild(forcastArticle);
            
        }

       
    }
    



}
