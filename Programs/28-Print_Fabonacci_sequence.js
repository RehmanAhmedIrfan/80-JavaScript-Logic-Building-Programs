//?Program to Print the Fibonacci Sequence
var a = 0,
  b = 1;
console.log(a);
console.log(b);
for (var i = 0; i <= 10; i++) {
  var temp = a + b; // 0+1 = 1
  console.log(temp);
  a = b;
  b = temp;
}
