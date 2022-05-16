var cityEl = document.querySelector("#city-input");
var stateEl = document.querySelector("#state-input")
var searchEl = document.querySelector("#search-button");
var nameEl = document.querySelector("#city-name");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind-speed");
var humidityEl = document.querySelector("#humidity");
var uvEl = document.querySelector("#uv-index");
var searchedCities = [];
var cityShown = document.getElementById(nameEl, stateEl);
    var stateShown = document.getElementById(state);

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;




var coordinates = function(city) {
    var cityShown = document.getElementById(nameEl, stateEl);
    var stateShown = document.getElementById(state);
   console.log(state);
    
var apiKey = "7492c99df1255804add346c7d2d387af";
var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "," + state + ",USA&appid=" + apiKey;
fetch(apiUrl)
.then(function(response) {
    if (response.ok) { 
        response.json().then(function(data) {
            
        })}
}
)
// console.log(data);


}

// var getWeather = function()
// var apiKey = "7492c99df1255804add346c7d2d387af";
// var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely&appid=" + apiKey;