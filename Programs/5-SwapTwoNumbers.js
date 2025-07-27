//? Program to Swap Two Variables

//* with temp variable
//   var a = prompt("Please Enter 1st Value");
//   var b = prompt("Please Enter 2nd Value");
//   console.log(`The 1st Value is: ${a}, The 2nd Value is: ${b}`);
//   var temp;
//   temp = a;
//   a = b;
//   b = temp;
//   console.log(
//     `After Swapping \n The 1st Value is: ${a}, The 2nd Value is: ${b}`
//   );
//* without temp varibale
var a = parseInt(prompt("Please Enter 1st Value"));
var b = parseInt(prompt("Please Enter 2nd Value"));
console.log(`The 1st Value is: ${a}, The 2nd Value is: ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`After Swapping \n The 1st Value is: ${a}, The 2nd Value is: ${b}`);
