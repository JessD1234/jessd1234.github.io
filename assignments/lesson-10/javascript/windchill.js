var temperature = document.getElementById("temperature").innerHTML;
    temperature = parseFloat (temperature); 

var windspeed = document.getElementById("windspeed").innerHTML;
    windspeed = parseFloat (windspeed);

var answer = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * (temperature * Math.pow(windspeed, 0.16)))

var prettyAnswer = answer.toFixed(1);

document.getElementById("windchill").innerHTML = "Windchill: " + prettyAnswer + " &deg;F";
