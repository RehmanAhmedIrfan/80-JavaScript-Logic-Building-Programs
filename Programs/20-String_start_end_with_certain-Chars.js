//?Program to Check Whether a String Starts and Ends With Certain Characters
var string = prompt("Please enter a string");
console.log(string);
var testStart = string.startsWith("w");
var testEnd = string.endsWith("e");
console.log(`Starts: ${testStart}`);
console.log(`Ends: ${testEnd}`);
if (testStart == true && testEnd == true) {
  console.log(`${string} starts with W and ends with e`);
} else if (testStart == true && testEnd == false) {
  console.log(`${string} starts with W`);
} else if (testStart == false && testEnd == true) {
  console.log(`${string} ends with e`);
} else {
  console.log(`${string} neither starts with W and ends with e`);
}
