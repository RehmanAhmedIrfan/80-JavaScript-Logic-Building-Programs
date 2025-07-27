//! 1. Log method----------
var testVariable = 404;
console.log("This is triggered by console.log");
console.log("checking the variable value", testVariable);
//! 2. Info method----------
console.info("Testing the log info method");
//! 3. Debug method----------
var userId = "UserOne";
var userId2 = "UserTwo";
var userId3 = "UserThree";
console.log("Console log" + " " + userId);
console.info("Console info" + " " + userId2);
console.debug("Console debug" + " " + userId3);
//! 4. Warn method-------------
var testVariable = 404;
var testObj = { firstname: "Ahmed", lastname: "Irfan" };
console.warn("This is a Warning message");
// passing a variable
console.warn(testVariable);
// pass an object as a warning
console.warn(testObj);
//! 5. Assert method-------------
let x = 1;
let y = 2;
console.assert(x + y == 4, "Expression is false");
console.assert(x + y == 3, "Expression is True");
//! 6. Count method-------------
for (i = 1; i <= 5; i++) {
  console.count();
}
//! 7. Error Method-----------
console.error("Error Occured");
//! 8. Table method--------------
var user = {
  name: "Ravidu",
  age: 25,
  job: "writer",
};
console.table(user);
console.table({ name: "Ahmed", Age: 22, Address: "Multan" });
