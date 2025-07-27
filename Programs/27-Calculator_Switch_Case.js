//?Program to Make a Simple Calculator Using Switch Case
let num1 = prompt("Please Enter 1st Number");
let num2 = prompt("Please Enter 2st Number");
let opr = prompt("Please Select Among +,-,*,/");
switch (opr) {
  case "+":
    var res = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} + ${num2} = ${res}`);
    break;
  case "-":
    var res = parseFloat(num1) - parseFloat(num2);
    console.log(`${num1} - ${num2} = ${res}`);
    break;
  case "*":
    var res = parseFloat(num1) * parseFloat(num2);
    console.log(`${num1} * ${num2} = ${res}`);
    break;
  case "/":
    var res = parseFloat(num1) + parseFloat(num2);
    console.log(`${num1} / ${num2} = ${res}`);
    break;
  default:
    console.log("Invalid Operator");
}
