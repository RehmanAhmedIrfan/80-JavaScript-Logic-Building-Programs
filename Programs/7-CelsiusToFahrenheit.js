//? Program to Convert Celsius to Fahrenheit
function convert() {
  var c = document.getElementById("data").value;
  var f = c * 1.8 + 32;
  // var c = (f-32) /1.8;
  document.getElementById("result").innerText = `${c} C = ${f} F`;
}
