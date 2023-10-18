function employee(name, sal) {
  this.name = name;
  this.sal = sal;
}

employee.prototype.increseSal = function (sal) {
  return (this.sal += sal);
};

const manish = new employee("manish", 50000);
const sunny = new employee("sunny", 40000);

manish.increseSal(10000);
console.log(manish);
console.log(sunny);
