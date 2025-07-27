// const person = {
//   name: "John",
//   age: 21,
// };
// const copy = person;
// console.log(copy); // {name: "John", age: 21}
// copy.name = "Peter";
// console.log(copy.name); // Peter
// console.log(person.name); // Peter
//!Clone the Object Using Object.assign()
const person = {
  name: "John",
  age: 21,
};
const cloneObject = Object.assign({}, person);
console.log(cloneObject);
console.log(cloneObject.name);
// changing the value of clonePerson
cloneObject.name = "Peter";
console.log(cloneObject.name);
console.log(person.name);
