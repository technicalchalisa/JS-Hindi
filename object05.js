// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nagama",
    [mySym]: "mykey1",
    "full name": "Nagama Khatoon",
    age: 18,
    location: "Bihar",
    email: "nagamakhatoon@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "arshad@google.com"
// Object.freeze(JsUser) //changed not Propagate
JsUser.email = "arshad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function (){
    console.log(`Hello ${this.name}, it's a function`);
}

console.log(JsUser.greetingTwo());
