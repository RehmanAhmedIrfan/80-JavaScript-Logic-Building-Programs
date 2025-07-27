//? Program to Print the Table of Any User Defined Number Using Function
function table(number) {
  for (var i = 1; i <= 10; i++) {
    var result = i * number;
    console.log(`${number} x ${i} = ${result}`);
  }
}
table(5);
table(20);
