//! Program for Right Triangle
// var base = prompt("Please enter the Base value");
// var height = prompt("Please enter the Height value");
// var area = (base * height) / 2;
// console.log(area);
// console.log("Base: " + base + "height: " + height + "area: " + area);
//! Program for all type of Triangles (Herons Formula)
var a = 10;
var b = 5;
var c = 10;
var s = (a + b + c) / 2;
var temp = s * (s - a) * (s - b) * (s - c);
var area = Math.sqrt(temp);
console.log(area);
