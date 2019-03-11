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
                    var pics = ["<img src=\"images/idaho-lake-landscape-1694642.jpg\" width=\"300px\" alt=\"idaho lake landscape\">", "<img src=\"images/4k-wallpaper-agriculture-clouds-842711.jpg\" width=\"300px\" alt=\"field with tractor\">", "<img src=\"images/agriculture-beautiful-clouds-325944.jpg\" width=\"300px\" alt=\"agricultural field\">"];

                    for (var i = 0; i < towns.length; i++) {
                        if ((towns[i].name === "Preston") || (towns[i].name === "Soda Springs") || (towns[i].name === "Fish Haven")) {
                            var myArticle = document.createElement("article");
                            var townName = document.createElement("h2");
                            var para1 = document.createElement("p");
                            var para2 = document.createElement("p");
                            var para3 = document.createElement("p");
                            var para4 = document.createElement("p");
                            var townPic = document.createElement("div");                             

                            townName.textContent = towns[i].name;
                            para1.textContent = towns[i].motto;
                            para2.textContent = "Year Founded: " + towns[i].yearFounded;
                            para3.textContent = "Current Population: " + towns[i].currentPopulation;
                            para4.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
                            if (towns[i].name === "Preston") {
                                townPic.innerHTML = pics[0];
                            }
                                else if (towns[i].name === "Soda Springs") {
                                    townPic.innerHTML = pics[1];
                                }
                                else if (towns[i].name ==="Fish Haven") {
                                    townPic.innerHTML = pics[2];
                                }
                            

                            myArticle.appendChild(townName);
                            myArticle.appendChild(para1);
                            myArticle.appendChild(para2);
                            myArticle.appendChild(para3);
                            myArticle.appendChild(para4);
                            myArticle.appendChild(townPic);

                            section.appendChild(myArticle);
                        }  

                        if (towns[i].name === "Preston") {
                            myArticle.className = 'preston';
                        }

                        if (towns[i].name === "Soda Springs") {
                            myArticle.className = 'soda-springs';
                        }
                    }
                }