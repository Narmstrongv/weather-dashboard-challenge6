// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city



//openweather weather call
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//fetch request
// let file = "fetch_info.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

var APIKey = "066b07abfaddb8582d123cb46ddd5a1f";
var userFormE1 = document.querySelector("#user-form");
var nameInputE1 = document.querySelector("#username");
var loc = document.querySelectorAll('.location');
var dataContainerE1 = document.querySelector("weather-container");
var dataSearchTerm = document.querySelector("data-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();
    //gets value from input
    var username = nameInputE1.value.trim();
    //username = location
    if (username) {
        getWeather(username);
        nameInputE1.value = "";
    } else {
        alert("Please enter a location");
    }
    console.log(event);
}

userFormE1.addEventListener("submit", formSubmitHandler);
console.log(userFormE1);

//arrayData = repos
var displayWeather = function(arrayData, searchTerm) {
    console.log(arrayData);
    console.log(searchTerm);

    //clears old content
    // dataContainerE1.textContent = "";
    // dataSearchTerm.textContent = searchTerm;
};



//TODO
// place json in variable

// place said variable inner html

//use html to move boxs into rows


for(var i =0; i < loc.length; i++) {
    loc[i].addEventListener('click', function(e){
        console.log(e.target.getAttribute('value'));
        getWeather(e.target.getAttribute('value'));
    })
}

//getUserRepos = getWeather

//scum save
// function getWeather(location) {
//     fetch('https://api.openweathermap.org/data/2.5/weather?appid=' + APIKey + '&q=' + location)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     });
// }

function getWeather(location) {
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=' + APIKey + '&q=' + location)
    .then(response => {
        return response.json().then(function(data) {
            displayWeather(data, location);
        })
    })
}


// var getData = function() {
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=Riverside&appid=' + APIKey).then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });
//     });
// }  
// getData();



//Date and Time
//var dateTime = new Date();
//document.getElementById('currentDay').innerHTML = dateTime;
