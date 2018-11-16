var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var townInfo = request.response;
  showTowns(townInfo);
}

function showTowns(jsonObj) {
  var town = jsonObj['towns'];

for( var i = 0; i <town.length; i++){
  if (town[i].name == "Preston" || town[i].name == "Soda Springs" || town[i].name == "Fish Haven" ){
  var myArticle = document.createElement('article');
  var myH3 = document.createElement('hp3');
  var myH4 = document.createElement('hp4');
  var myPara2 = document.createElement('hp');
  var myPara3 = document.createElement('hp');
  var myPara4 = document.createElement('hp');
  var myList = document.createElement('hp');

  myH3.textContent = town[i].name;
  myH4.textContent = town[i].motto;
  myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
  myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
  myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
  myList.textContent = 'Events: ';

  var eventList = town[i].events;

  for (var j = 0; j < eventList.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = eventList[j];
    myList.appendChild(listItem);
  }
  myArticle.appendChild(myH3);
  myArticle.appendChild(myH4);
  myArticle.appendChild(myPara2);
  myArticle.appendChild(myPara3);
  myArticle.appendChild(myPara4);
  myArticle.appendChild(myList);

  section.appendChild(myArticle);
}}
}
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/1a0f871dbaa1c468/conditions/q/CA/San_Francisco.json', true);

weatherObject.send();

weatherObject.onload() = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
} 
