//? Program to Find the Largest Among Three Numbers
//Method 2: User defined function
function check(p, q, r) {
  if (p >= q && p >= r) {
    return p;
  } else if (q >= p && q >= r) {
    return q;
  } else {
    return r;
  }
}
//Method 1:
var a = prompt("Please Enter the First Number");
var b = prompt("Please Enter the second Number");
var c = prompt("Please Enter the third Number");
var x = check(a, b, c);
//   var x = Math.max(a, b, c);
//   console.log(`${a},${b},${c}: Largest = ${x}`);
