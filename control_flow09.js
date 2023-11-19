//if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature ===40) {
//     console.log("less then 50");
// }else{
//     console.log("temperature is greater then 50");
// }
// console.log("executed");
// <, >, <=, >=, ==, !=, ===

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance > 500) {
//     console.log("less then 500");
// }else if (balance < 750) {
//     console.log("less then 750");
// }else if (balance < 900) {
    
// }else {
//     console.log("less then 1200");
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard & 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

