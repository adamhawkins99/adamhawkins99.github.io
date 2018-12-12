let weatherRequestla = new XMLHttpRequest();
weatherRequestla.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5368381&APPID=c6f31eed39521edf3d22b69d4b52f552&units=imperial', true);

weatherRequestla.send();

weatherRequestla.onload = function () {
    let weatherData = JSON.parse(weatherRequestla.responseText);
    console.log(weatherData);
    document.getElementById("placela").innerHTML = weatherData.name;
    document.getElementById("weatherDescla").innerHTML = weatherData.weather[0].main;
    document.getElementById("current-templa").innerHTML = weatherData.main.temp;

}