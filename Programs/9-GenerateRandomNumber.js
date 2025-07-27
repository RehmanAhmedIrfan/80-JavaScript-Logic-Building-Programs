//? Program to Generate a Random Number
var x = Math.random();
console.log("Before Calculation" + x);
x = x * (1000 - 1) + 1;
x = x * 10000; //OTP logic
console.log("After Calculation" + x);
console.log("Floor Calculation" + Math.floor(x));
