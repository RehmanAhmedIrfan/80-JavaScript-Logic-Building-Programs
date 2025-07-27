//? Program to Check Armstrong Number
var number = prompt("Please Enter a Number");
var temp = number;
var noOfDigits = number.toString().length;
//   alert(noOfDigits);
var sum = 0;
while (temp > 0) {
  // console.log(temp);
  var digit = temp % 10;
  // console.log(digit);
  // console.log(digit ** 3);
  sum += digit ** noOfDigits;
  // console.log("Sum" + sum);
  temp = parseInt(temp / 10);
  // console.log(temp);
  // console.log("-----------");
}
if (sum == number) {
  console.log(`${number} is an Armstrong Number`);
} else {
  console.log(`${number} is not an Armstrong Number`);
}
