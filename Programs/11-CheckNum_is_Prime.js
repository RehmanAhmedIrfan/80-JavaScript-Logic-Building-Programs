//? Program to Check if a Number is Prime
var num = prompt("Please Enter a Number");
if (number == 1) {
  console.log(`${number} is Neither Prime nor Composite`);
} else if (number < 1) {
  console.log(`${number} is not a Prime Number`);
} else {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      var result = `${number} is not a Prime Number`;
      break;
    } else {
      var result = `${number} is a Prime Number`;
    }
  }
  console.log(result);
}
