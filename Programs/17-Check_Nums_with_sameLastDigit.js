//? Program to Check if the Numbers Have Same Last Digit
var a = prompt("Please enter 'a' number");
var b = prompt("Please enter 'b' number");
var c = prompt("Please enter 'c' number");

var res1 = a % 10;
var res2 = b % 10;
var res3 = c % 10;

if (res1 == res2 && res1 == res3) {
  console.log(`${a}, ${b}, ${c} are Having the same last digit`);
} else {
  console.log(`${a}, ${b}, ${c} are not Having the same last digit`);
}
