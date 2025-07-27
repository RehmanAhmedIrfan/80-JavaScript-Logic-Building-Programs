//! Program to Check Palindrome Using Array Methods
//Method 1;
var string = prompt("Enter a String");
var len = string.length;
var msg = "it is a Palindrome";
for (var i = 0; i < len / 2; i++) {
  if (string[i] != string[len - 1 - i]) {
    msg = "It is not a Palindrome";
  }
}
console.log(`${string}: ${msg}`);

//Method 2;
var string = prompt("Enter a String");
var stringArray = string.split("");
var stringArrayRev = stringArray.reverse();
var revString = stringArrayRev.join("");
//   console.log(stringArray);
//   console.log(stringArrayRev);
if ((string = revString)) {
  console.log(`${string}: is Palindrome`);
} else {
  console.log(`${string}: is not a Palindrome`);
}
