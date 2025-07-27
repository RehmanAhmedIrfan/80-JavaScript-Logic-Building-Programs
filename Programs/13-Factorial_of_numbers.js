//? Program to Find the Factorial of a Number
var number = prompt("Please Enter a Number");
var fact = 1;
if (number == 0) {
  console.log(`The Factorial of ${number} is 1`);
} else if (number < 0) {
  console.log(`The factorial of -Ve Number is not possible`);
} else {
  for (var i = 1; i <= number; i++) {
    fact = fact * i; // 1*1*2*3*4*5....
  }
  console.log(`The factorial of ${number} is ${fact}`);
}
