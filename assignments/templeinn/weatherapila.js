let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5368381&APPID=c6f31eed39521edf3d22b69d4b52f552&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("placela").innerHTML = weatherData.name;
    document.getElementById("weatherDescla").innerHTML = weatherData.weather[0].main;
    document.getElementById("highTempla").innerHTML = weatherData.main.temp_max;
    document.getElementById("lowTempla").innerHTML = weatherData.main.temp_min;
    document.getElementById("current-templa").innerHTML = weatherData.main.temp;
    document.getElementById("currentWindla").innerHTML = weatherData.wind.speed;

    var iconcode = weatherData.weather[0].icon;

    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
  
}