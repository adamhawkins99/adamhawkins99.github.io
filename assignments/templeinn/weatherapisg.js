let weatherRequest = new XMLHttpRequest();
weatherRequestsg.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4171010&APPID=c6f31eed39521edf3d22b69d4b52f552&units=imperial', true);

weatherRequestsg.send();

weatherRequestsg.onload = function () {
    let weatherData = JSON.parse(weatherRequestsg.responseText);
    console.log(weatherData);
    document.getElementById("placesg").innerHTML = weatherData.name;
    document.getElementById("weatherDescsg").innerHTML = weatherData.weather[0].main;
    document.getElementById("highTempsg").innerHTML = weatherData.main.temp_max;
    document.getElementById("lowTempsg").innerHTML = weatherData.main.temp_min;
    document.getElementById("current-tempsg").innerHTML = weatherData.main.temp;
    document.getElementById("currentWindsg").innerHTML = weatherData.wind.speed;

    var iconcode = weatherData.weather[0].icon;

    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
  
}