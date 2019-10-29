// add load event listener
addEventListener('load', function() {
    alert('CIT 261 is Awesome...This alert was called by a load event listener...Click OK, I will explain later');
 });

 // add click event
 const clickMe = document.getElementById('clickMe');
 clickMe.addEventListener('click', clicked);
 
function clicked() {
   clickMe.innerHTML = "YAY!! You clicked on me.";
}

// add mousedown and mouseup event that makes div appear
const mouse = document.getElementById('mouse');

mouse.addEventListener('mouseover', down);
mouse.addEventListener('mouseout', up);
const secret = document.getElementById('secret');
function down() {
    secret.classList.add('reveal');
}
function up() {
    secret.classList.remove('reveal');
}
const touches = document.getElementById('touches');

touches.addEventListener('mouseover', down2);
touches.addEventListener('touchstart', down2);
touches.addEventListener('mouseout', up2);
touches.addEventListener('touchend', up2);
const secret2 = document.getElementById('secret2');
function down2(e) {
    secret2.classList.add('reveal');
    e.preventDefault();
}
function up2() {
    secret2.classList.remove('reveal');
}
// add keydown event
addEventListener('keydown', steelback);
const html = document .getElementsByTagName('html')[0];
function steelback() {
html.classList.toggle('colorSteel');
}
// add keyup event
addEventListener('keyup', bluecolor);
const keysec = document .getElementById('keysection');
function bluecolor() {
    keysec.classList .toggle('colorLightSteel');
}

// add keypress event
let keys = document .getElementById('keystroke');

addEventListener('keypress', keystrokes);
function keystrokes(event) {
    let key = event.key;
    keys.innerHTML += key;
}
