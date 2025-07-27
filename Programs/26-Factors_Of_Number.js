//?Program to Find the Factors of a Number
var number = prompt("Please Enter a Number");
for (var i = 1; i <= number; i++) {
  // console.log(i);
  if (number % i == 0) {
    console.log(i);
  }
}
