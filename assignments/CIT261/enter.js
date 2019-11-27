
function entervehicle() {
var make = 
{ 
type: document.getElementById("make").value,
model: document.getElementById("model").value 
};
var model = document.getElementById("model").value;
var year = document.getElementById("year").value;
var vin = document.getElementById("vin").value;
var color = document.getElementById("color").value;
var icecreamlink = JSON.stringify(make);

if (year < 1) {
year = 2000;
}
localStorage.setItem('showvehicle', year + make + model + color + vin)
localStorage.setItem("savedorder", year  + " " + icecreamlink + " " + vin + color);
var date = localStorage.getItem (entervehicle)
document.getElementById("orderdisplay").innerHTML = '<img src="https://media.istockphoto.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258" height="42" width="42"<p>' + year + vin + " " + icecreamlink + ' Click Save to Continue</p>';
};

function showmetheorder() {
document.getElementById("orderdisplay").innerHTML = '<img src="https://media.istockphoto.com/photos/colorful-scoops-ice-cream-background-concept-picture-id965401258" height="42" width="42"><p>' + localStorage.getItem("savedorder") + " was saved from the past.</p>";
if (localStorage.getItem("savedorder") === null) {
document.getElementById("orderdisplay").innerHTML = '<img src="https://pbs.twimg.com/profile_images/811341743371194368/353_ttjx_400x400.jpg" height="42" width="42"><p>' + "No orevious orders.</p>";
}
};
function throwawayorder() {
localStorage.removeItem("savedorder");
document.getElementById("orderdisplay").innerHTML = "We hope you enjoyed your order";
};
