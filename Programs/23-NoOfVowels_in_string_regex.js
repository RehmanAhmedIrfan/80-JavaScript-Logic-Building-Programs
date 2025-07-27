//? Program to Count the Number of Vowels in a String Using Regex
//Vowels: a e i o u
//Regex is known as Regular expression
//Regex Used ot match , test, find characters from a string
var string = prompt("Enter a String");
const reg = /[aeiou]/gi; //--> /expression/ modifier;
var chars = string.match(reg);
console.log(chars.join(","));
console.log(chars.length);
