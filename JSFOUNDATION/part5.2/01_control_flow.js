// if

// const isUserloggeIn = true;
// const temperature = 41;

// if (temperature === 51) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// <, >, <=, >=, ==, ===, !=, !==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test"); // implicit scope
// if (balance > 500) console.log("test"), console.log('test2'); // never write code like this.


// if (balance < 500) {
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less then 750 ");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==1) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}

