let weatherRequestsg = new XMLHttpRequest();
weatherRequestsg.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4171010&APPID=c6f31eed39521edf3d22b69d4b52f552&units=imperial', true);

weatherRequestsg.send();

weatherRequestsg.onload = function () {
    let weatherData = JSON.parse(weatherRequestsg.responseText);
    console.log(weatherData);
    document.getElementById("placesg").innerHTML = weatherData.name;
    document.getElementById("weatherDescsg").innerHTML = weatherData.weather[0].main;
    document.getElementById("current-tempsg").innerHTML = weatherData.main.temp;
 
}