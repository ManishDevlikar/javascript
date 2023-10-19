class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  getDetails() {
    console.log("Name:" + this.name + " " + "Gender" + this.gender);
  }
}

class Doctor extends Person{
  constructor(name, gender, fees) {
    super(name, gender); // calling the parent's constructor
    this.fees = fees;
  }

  getDetails() {
    console.log(
      `Name: ${this.name}  Gender: ${this.gender}  Fees: ${this.fees}`
    );
  }
}

let person = new Person("manish", "male");
person.getDetails();

let rohan = new Doctor("rohan", "male", 20000);
rohan.getDetails();
