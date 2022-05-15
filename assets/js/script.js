var cityEl = document.getElementById("search-input");
var searchEl = document.getElementById("search-button");
var nameEl = document.getElementById("city-name");
var tempEl = document.getElementById("temperature");
var windEl = document.getElementById("wind-speed");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("uv-index");
var searchedCities = [];


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;




var getWeather = function(cityName) {
const cityShown = document.getElementById("city-name")

cityShown.textContent = city

fetch
}