// let prop = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(prop);
// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);
let user = {
  name: "manish",
  age: "23",
  logIn: function () {
    console.log("Logged in");
  },
};

for (let [key, value] of Object.entries(user)) {
  if (typeof value != "function") console.log(`${key} ${value}`);
}
console.log(user.name);
user.name = "raj";
console.log(user.name);
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));
user.name = "khush";
console.log(user.name);
