//?Program to Convert the First Letter of a String into Uppercase
//charAt(), toUpperCase(), slice()--> Methods
var string = prompt("Please Enter String");
//   console.log(string);
var first = string.charAt(0);
//   console.log(first);
//   console.log(first.toUpperCase);
var rem = string.slice(1);
//   console.log(rem);
var caps = first.toUpperCase() + rem;
console.log(`Final ${caps}`);
