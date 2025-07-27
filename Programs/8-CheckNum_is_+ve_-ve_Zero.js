//? Program to Check if a Number is Positive, Negative, or Zero

//Math.sign() Method
function check() {
  var value = document.getElementById("data").value;
  // var result = Math.sign(value);
  if (value > 0) {
    res = `${value} Positive Number`;
  } else if (value < 0) {
    res = `${value} Negative Number`;
  } else if (value == 0) {
    res = `${value} is Zero`;
  } else {
    res = `${value} is Not a Number`;
  }
  document.getElementById("res").innerText = result;
}
