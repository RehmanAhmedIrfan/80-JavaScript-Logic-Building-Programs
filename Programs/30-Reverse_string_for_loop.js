//?Program to Reverse a String
var string = prompt("Please ENter a String");
var strLen = string.length;
var revStr = "";
for (var i = strLen - 1; i >= 0; i--) {
  revStr += string[i];
}
console.log(`${string} reverse is ${revStr}`);
