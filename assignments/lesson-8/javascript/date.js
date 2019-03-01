var now = new Date();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var dayofWeek = weekday [now.getDay()];
var months = new Array("Januray", "February", "March", "April", "May", "June", "July", "August", "Semptember", "October", "November", "December");
var currentMonth = months [now.getMonth()];
var dayofMonth = now.getDate ();
var year = now.getFullYear ();

var today = dayofWeek + ", " + dayofMonth + " " + currentMonth + " " + year;

document.getElementById("date").innerHTML = today;
