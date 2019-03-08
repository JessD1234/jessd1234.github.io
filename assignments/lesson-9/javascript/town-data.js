var section = document.querySelector("article");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    var townInfo = request.response;
    showTowns(townInfo);
}


function showTowns(jsonObj) {
    var towns = jsonObj["towns"];

    for (var i = 0; i < towns.length; i++) {
        var myArticle = document.createElement("article");
        var townName = document.createElement("h2");
        var para1 = document.createElement("p");
        var para2 = document.createElement("p");
        var para3 = document.createElement("p");
        var para4 = document.createElement("p");

        townName.textContext = towns[i].name;
        para1.textContext = towns[i].motto;
        para2.textContext = "Year Founded: " + towns[i].yearFounded;
        para3.textContext = "Current Population: " + towns[i].currentPopulation;
        para4.textContext = "Annual Rainfall: " + towns[i].averageRainfall;

        myArticle.appendChild(townName);
        myArticle.appendChild(para1);
        myArticle.appendChild(para2);
        myArticle.appendChild(para3);
        myArticle.appendChild(para4);

        section.appendChild(myArticle);
    }
}