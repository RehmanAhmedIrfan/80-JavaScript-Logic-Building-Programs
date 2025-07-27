//! Program to Format Numbers as Currency Strings
// const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });
// console.log(formatter.format(2500));
const formatter = new Intl.NumberFormat("ur-PK", {
  style: "currency",
  currency: "PKR",
});
console.log(formatter.format(2500));
//!Format Numbers as Currency String Using toLocaleString()
// const result = (2500).toLocaleString("ur-Pk", {
//   style: "currency",
//   currency: "PKR",
// });
// console.log(result);
