//!Program to Append an Object to an Array
const appendObjToArr = (arr, obj) => {
  arr.push(obj);
  console.log(arr);
};
const arr = [1, 2, 3, 4, 5, 6];
const obj = { x: 7, y: 8 };
appendObjToArr(arr, obj);
