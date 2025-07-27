//?Program to Replace Characters of a String
var string = prompt("Enter a String");
var reg = new RegExp("red", "gi");
var newString = string.replace("reg", "blue");
console.log(newString);
