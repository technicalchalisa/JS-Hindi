// function demoFun (a, b){
//     c = a**2
//     d = 2*(a*b)
//     f = b**2
//     g = c+d+f
//    console.log(`This is the value of the number given by you ${g}`);
//    }
//    demoFun(10,25)

function sayMyName (){
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("D");
}

// sayMyName()

// function addTwoNumber (num1, num2){
//     console.log(num1+num2);
// }

function addTwoNumber (num1, num2){
    // let result = num1 + num2
    // return result
    return num1+num2
}

const result = addTwoNumber(7,8)

// console.log("Result:", result);


// function loginUserMessage(username = "sam"){
//     if(!username){
//        return console.log("Please enter a username");
//     }
//     return `${username} just logged in `
// }
// console.log(loginUserMessage());

// function calculateCartPrice (...itm1){
//     return 
// }
// console.log(calculateCartPrice(200,499,199,749));

const user = {
    username: "Arshad",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    user: "Afzal",
    price: 499
})

const myNewArray = [200, 400, 100,500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100,500]));