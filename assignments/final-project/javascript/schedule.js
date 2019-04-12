var scheduleSection = document.querySelector(".schedule");

                var requestURL = "https://api.jsonbin.io/b/5ca5488424f5074645ec64f0/1";                            
                var request = new XMLHttpRequest();
                request.open("GET", requestURL);
                request.responseType = "json";
                request.send();

                request.onload = function () {
                    var scheduleInfo = request.response;
                    var templeName = document.getElementById("temple-name").innerHTML;
                    if (templeName === "Columbus Ohio Temple") {
                    showScheduleColumbus(scheduleInfo);

                        }

                    else if (templeName ==="San Diego California Temple") {
                        showScheduleSanDiego(scheduleInfo);
                    }
                     else if (templeName ==="Rome Italy Temple") {
                        showScheduleRome(scheduleInfo);
                    }

                    else if (templeName ==="Sao Paulo Brazil Temple") {
                        showScheduleSaoPaulo(scheduleInfo);
                    }
                }

function showScheduleColumbus(scheduleInfo) {
    var scheduleDetails = scheduleInfo["temples"];

    for (i=0; i < scheduleDetails.length; i++) {
        if (scheduleDetails[i].name === "Columbus Ohio") {
            var scheduleArticle = document.createElement("article");
            var list = document.createElement("ul");
            var templeSchedule = scheduleDetails[i].schedule;

            for (j=0; j < templeSchedule.length; j++) {
                var scheduleItem = document.createElement("li");
                scheduleItem.textContent = templeSchedule[j];
                scheduleItem.className = "schedule-article"
                list.appendChild(scheduleItem);
            }

            scheduleArticle.appendChild(list);
            scheduleSection.appendChild(scheduleArticle);
            
        }

    }
}

function showScheduleSanDiego(scheduleInfo) {
    var scheduleDetails = scheduleInfo["temples"];

    for (i=0; i < scheduleDetails.length; i++) {
        if (scheduleDetails[i].name === "San Diego California") {
            var scheduleArticle = document.createElement("article");
            var list = document.createElement("ul");
            var templeSchedule = scheduleDetails[i].schedule;

            for (j=0; j < templeSchedule.length; j++) {
                var scheduleItem = document.createElement("li");
                scheduleItem.textContent = templeSchedule[j];
                scheduleItem.className = "schedule-article"
                list.appendChild(scheduleItem);
            }

            scheduleArticle.appendChild(list);
            scheduleSection.appendChild(scheduleArticle);
            
        }

    }
}

function showScheduleRome(scheduleInfo) {
    var scheduleDetails = scheduleInfo["temples"];

    for (i=0; i < scheduleDetails.length; i++) {
        if (scheduleDetails[i].name === "Rome Italy") {
            var scheduleArticle = document.createElement("article");
            var list = document.createElement("ul");
            var templeSchedule = scheduleDetails[i].schedule;

            for (j=0; j < templeSchedule.length; j++) {
                var scheduleItem = document.createElement("li");
                scheduleItem.textContent = templeSchedule[j];
                scheduleItem.className = "schedule-article"
                list.appendChild(scheduleItem);
            }

            scheduleArticle.appendChild(list);
            scheduleSection.appendChild(scheduleArticle);
            
        }

    }
}

function showScheduleSaoPaulo(scheduleInfo) {
    var scheduleDetails = scheduleInfo["temples"];

    for (i=0; i < scheduleDetails.length; i++) {
        if (scheduleDetails[i].name === "Sao Paulo Brazil") {
            var scheduleArticle = document.createElement("article");
            var list = document.createElement("ul");
            var templeSchedule = scheduleDetails[i].schedule;

            for (j=0; j < templeSchedule.length; j++) {
                var scheduleItem = document.createElement("li");
                scheduleItem.textContent = templeSchedule[j];
                scheduleItem.className = "schedule-article"
                list.appendChild(scheduleItem);
            }

            scheduleArticle.appendChild(list);
            scheduleSection.appendChild(scheduleArticle);
            
        }

    }
}