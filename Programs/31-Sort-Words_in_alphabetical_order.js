//?Program to Sort Words in Alphabetical Order
// split(), & sort() --> Methods
var string = prompt("Enter a string");
// var stringArray = string.split('');
var stringArray = string.split(" ");
var arrangedStringArray = stringArray.sort();
console.log(string);
console.log(stringArray);
console.log(arrangedStringArray);
console.log(arrangedStringArray.join(" "));
