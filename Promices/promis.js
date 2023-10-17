const promisOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("inside promise one");
    resolve();
  }, 5000);
});

promisOne.then(() => {
  // console.log("promise one success");
});
// ----------------------------------------------------------------2-----------------------------------------------

const promisTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Inside Promise 2");
    resolve();
  }, 2000);
}).then(() => {
  // console.log("Promise two Success");
});
// ----------------------------------------------------------------3-----------------------------------------------
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "John",
      age: 34,
    });
  }, 1000);
}).then((user) => {
  // console.log("promis Three", user);
});

// ----------------------------------------------------------------4-----------------------------------------------

const promiseFour = new Promise((resolve, reject) => {
  const isError = true;
  setTimeout(() => {
    if (!isError) {
      resolve({
        name: "john",
        age: 57,
      });
    } else {
      reject("Error:Invalid URL");
    }
  }, 1000);
})
  .then((user) => {
    // console.log(user);
    return user.name;
  })
  .then((userName) => {
    // console.log(userName);
  })
  .catch((err) => {
    // console.log(err);
  })
  .finally(() => {
    // console.log("Executed");
  });

// ----------------------------------------------------------------5-----------------------------------------------

const promiseFive = new Promise((resolve, reject) => {
  const isError = false;
  setTimeout(() => {
    if (!isError) {
      resolve({
        name: "Jane",
        age: 100,
      });
    } else {
      reject("ERROR: Invalid Code");
    }
  }, 2000);
});

async function promiseFiveRes() {
  try {
    const reponse = await promiseFive;
    // console.log(reponse);
  } catch (err) {
    // console.log(err);
  }
}
// promiseFiveRes();

// ----------------------------------------------------------------6-----------------------------------------------

async function getdata() {
  try {
    const response = await fetch("https://api.github.com/users/manishdevlikar");
    const data = await response.json();
    // console.log(data);
  } catch (error) {
    // console.log(error);
  }
}

// getdata();

// ------------------------------------------------------------6 with then syntax------------------------------------

fetch("https://api.github.com/users/manishdevlikar").then((response) => {
  return response.json();
}).then((data)=>{
  console.log(data);
})