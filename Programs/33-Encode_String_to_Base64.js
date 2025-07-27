//! Program to encode a string to Base64
const string = "JavaScript Logic Building";
const result = window.btoa(string);
console.log(result);
//!Decoding:
const result1 = window.atob(string);
console.log(result1);
