var submitButton = document.getElementById("submit");
var weatherReport = document.getElementById('weather');
var formStop = document.getElementById('form');
var cityData = JSON.parse(localStorage.getItem('cityData')) || [];
submitButton.addEventListener('click', () => {
    formStop.addEventListener('submit', (event) => {
        event.preventDefault();
        var citySearch = document.getElementById('city');
        var city = citySearch.value;
        var geoLocate = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b296dba86a3a90b522bbd546341c5512`;
        var getCoords = function () {
            fetch(geoLocate)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var latitude = data.coord.lat;
                    var longitude = data.coord.lon;
                    var lat = `${latitude}`;
                    var lon = `${longitude}`;
                    var APIurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b296dba86a3a90b522bbd546341c5512`;
                    fetch(APIurl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (data) {
                            var temperature = data.list[0].main.temp;
                            var temp = (temperature - 273.15) * 9/5 + 32;
                            var city = citySearch.value;
                            weatherReport.textContent = `The temperature in ${city} is ${temp} degrees!`

                            var cityObj = {city: city, temp :temp};
                            cityData.push(cityObj);
                            localStorage.setItem('cityData', JSON.stringify(cityData));

                            var cityList = document.getElementById("city-list");
                            cityList.innerHTML = '';
                            for (var i=0; i < cityData.length; i++){
                                var cityEl = document.createElement('li');
                                var tempEl = document.createElement('span'); 
                                cityEl.textContent = cityData[i].city + ': ';
                                tempEl.textContent = cityData[i].temp + ' degrees';
                                cityEl.appendChild(tempEl);
                                cityList.appendChild(cityEl);
                            }
                        })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        getCoords();
    })
});