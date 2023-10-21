function outer() {
    let username = "manish";

    function inner() {
        console.log(username);
    }

    return inner;
}

const res = outer();
res();