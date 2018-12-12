let weatherRequestcc = new XMLHttpRequest();
weatherRequestcc.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5536630&APPID=c6f31eed39521edf3d22b69d4b52f552&units=imperial', true);

weatherRequestcc.send();

weatherRequestcc.onload = function () {
    let weatherData = JSON.parse(weatherRequestcc.responseText);
    console.log(weatherData);
    document.getElementById("placecc").innerHTML = weatherData.name;
    document.getElementById("weatherDesccc").innerHTML = weatherData.weather[0].main;
    document.getElementById("current-tempcc").innerHTML = weatherData.main.temp;


    var iconcode = weatherData.weather[0].icon;

    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
  
}