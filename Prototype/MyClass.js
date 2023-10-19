class User {
  constructor(username, email, sal) {
    this.username = username;
    this.email = email;
    this.sal = sal;
  }

  getEmail() {
    return this.email;
  }

  getUsername() {
    return this.username;
    }
    getSal() {
        return this.sal;
    }
}

const x = new User("x", "x@gmail.com", 50000);
const xx = new User("xx", "xx@gmail.com", 50000);

console.log(x.getUsername());
console.log(x.getSal());
// console.log(xx);



// behind the scene

function user(username, sal) {
    this.username = username;
    this.sal = sal;
}

user.prototype.getSal = function () { 
    return this.sal;
}

const user1 = new user("max", 200000);

// console.log(user1.getSal());