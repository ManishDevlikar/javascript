function setUsername(username) {
  this.username = username;
}

function user(username, email, sal) {
  // setUsername(username);
  // setUsername.call(username)
  setUsername.call(this, username);
  this.email = email;
  this.sal = sal;
}

const manish = new user("manish", "manish@gmail.com", 50000);

console.log(manish);
