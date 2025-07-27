//? Program to Convert Kilometers to Miles
function convert() {
  var kms = document.getElementById("data").value;
  const factor = 0.621371;
  var miles = kms * factor;
  // alert(miles);
  // document.getElementById("res").innerText = `${miles} miles`;
  document.getElementById("res").innerText = miles + " Miles";
}
