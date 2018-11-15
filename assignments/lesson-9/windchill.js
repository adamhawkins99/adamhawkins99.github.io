{
    var tempF= (90 + 60) / 2;
    var speed= 5;
    var chill = 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(speed, 0.16) + (0.4275 * tempF) * Math.pow(speed, 0.16);
    
    document.write('<span class="windchill">' + chill.toFixed(3))
 
} 