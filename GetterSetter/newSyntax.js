class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  set email(email) {
    this._email = email;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set password(password) {
    this._password = password;
  }

  get password() {
    return this._password;
  }
}

const manish = new User("manish.gmail", "1sk13");
console.log(manish.email);
