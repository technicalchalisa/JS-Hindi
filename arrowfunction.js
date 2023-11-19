const user = {
    username: "arshad",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "Nagama"
// user.welcomeMessage()

// console.log(this);

// function coffe () {
//     let username = "arshad"
//     console.log(this.username);
// }

// coffe()

// const chai = function () {
//     let username = "nagama"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "nagama"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "nagama"})

console.log(addTwo(5, 8));

// const myArray = [2, 5, 3, 6, 8,4]

// myArray.forEach()




