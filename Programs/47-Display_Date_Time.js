// Creating object of
// Date constructor
const currentDate = new Date();
// Extract components of the date and time
// Getting year: 2023
const year = currentDate.getFullYear();
// Getting month
const month = currentDate.getMonth() + 1;
// Getting day
const day = currentDate.getDate();
// Getting hours
const hours = currentDate.getHours();
// Getting minutes
const minutes = currentDate.getMinutes();
// Getting seconds
const seconds = currentDate.getSeconds();
// Using template literal for
// printing the date and time
// in console
console.log(`Current Date: ${year}-${month}-${day}`);
console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
//**Using the Date.now() Method */
// const timestamp = Date.now();
// // Convert timestamp to a readable date and time format
// const currentDate = new Date(timestamp);
// // Formatting date
// const formattedDate = currentDate.toLocaleString();
// // Printing Date and Time
// // in console
// console.log(`Current Date and Time: ${formattedDate}`);
