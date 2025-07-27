// ?Program to Check if a Number is Odd or Even
// if-else
// ternary operator
// var x = parseInt(prompt("Enter Any Number"));
// if (x % 2 == 0) {
//   console.log("The Number is Even");
// } else {
//   console.log("The Number is Odd");
// }
//With Ternary Operator:
var x = parseInt(prompt("Enter Any Number"));
var result = x % 2 == 0 ? "EVEN" : "ODD";
console.log(`${x} is an ${result} number`);
