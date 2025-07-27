//? Program to Find Sum of Natural Numbers Using Recursion
function sum(num) {
  if (num > 0) {
    return num + sum(sum - 1);
  } else {
    return num;
  }
}
var res = sum(5);
console.log(res);
