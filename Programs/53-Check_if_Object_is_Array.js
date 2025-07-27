//! Program to Check if an Object is an Array
function checkObject(arr) {
  // check if arr is array
  const result = Array.isArray(arr);
  if (result) {
    console.log(`[${arr}] is an array.`);
  } else {
    console.log(`${arr} is not an array.`);
  }
}
const array = [1, 2, 3];
// call the function
checkObject(array);
