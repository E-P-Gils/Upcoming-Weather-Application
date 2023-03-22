var atlantaButton = document.getElementById("atlanta");
var denverButton = document.getElementById("denver");
var seattleButton = document.getElementById("seattle");
var sanFranButton = document.getElementById("sanFran");
var orlandoButton = document.getElementById("orlando");
var nycButton = document.getElementById("nyc");
var chicagoButton = document.getElementById("chicago");
var austinButton = document.getElementById("austin");
var currentWeather = document.getElementById("currentWeather");

atlantaButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=33.7488&lon=-84.3877&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

denverButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=39.7392&lon=-104.9903&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

seattleButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=47.6062&lon=-122.3321&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

sanFranButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=37.7749&lon=-122.4194&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

orlandoButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=28.5384&lon=-81.3789&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

nycButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=40.7128&lon=-74.0060&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

chicagoButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=41.8781&lon=-87.6298&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32);
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

austinButton.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=30.2672&lon=-97.7431&appid=b296dba86a3a90b522bbd546341c5512")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var temp = data.list[0].main.temp;
            var fahrenheit = Math.trunc((temp-273.15)*9/5+32); 
            currentWeather.textContent = (fahrenheit + " degrees!");
        })
}
)

