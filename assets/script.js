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

var APIKey = "066b07abfaddb8582d123cb46ddd5a1f";

//openweather weather call
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//fetch request
// let file = "fetch_info.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

fetch('https://api.openweathermap.org/data/2.5/weather?q=Riverside&appid=' + APIKey)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });