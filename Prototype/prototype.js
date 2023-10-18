let arr = [1, 2, 3, 4];

Object.prototype.getMethod = function () {
  console.log("common for all");
};

Array.prototype.forArr = function () {
  console.log("Only for arrays");
};

let obj = {
  name: "manish",
  age: 55,
};

function myFunc() {}

arr.getMethod();
obj.getMethod();
myFunc.getMethod();

arr.forArr();
// obj.forArr();
// myFunc.forArr();

//  moderan prototype inheritance

Object.setPrototypeOf(arr, obj);
// console.log(arr.__proto__ === obj); // true

String.prototype.getLength = function () {
  console.log(this);
  console.log(`length is ${this.trim().length}`);
};

"hello world".getLength();
"  manish ".getLength();
