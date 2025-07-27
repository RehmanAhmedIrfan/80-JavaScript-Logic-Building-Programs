//! Program to Merge Properties of Two Objects
// object 1
const person = {
  name: "Jack",
  age: 26,
};
// object 2
const student = {
  gender: "male",
};
const mergedObj = { ...person, ...student };
console.log(mergedObj);
//! program to merge property of two objects
// // object 1
// const person = {
//   name: "Jack",
//   age: 26,
// };
// // object 2
// const student = {
//   gender: "male",
// };
// // merge two objects
// const newObj = Object.assign(person, student);
// console.log(newObj);
