//? Program to Find the Factorial Using Recursion
var number = prompt("Please Enter a Number");
var fact = 1;
function factorial(n) {
  if (n > number) {
    return;
  }
  var temp = fact;
  fact = fact * n;
  // console.log(temp + "x" + n + "=" + fact);
  n++;
  factorial(n);
}
factorial(1);
console.log(`The Fact of ${number} is ${fact}`);
