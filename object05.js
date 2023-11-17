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

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "arshad@google.com"
Object.freeze(JsUser) //changed not Propagate
JsUser.email = "arshad@microsoft.com"
console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function (){
    console.log(`Hello ${this.name}, it's a function`);
}

console.log(JsUser.greetingTwo());


const tinderUser = new Object() // singleton

const tinderUser2 = {}  //non singleton object

console.log(tinderUser);


tinderUser.id = "2362"
tinderUser.name = "Arshad"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "nagamakhatoon@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Arshad",
            lastname:"Alam"
        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

 const obj4 = {obj1, obj2}
 const obj5 = Object.assign({}, obj1,obj2, obj3)
const obj6 = {...obj1, ...obj2, ...obj3} //spread operator
console.log(obj6);


const user = [
    {
        id: 123,
        email:"pk@google.com"
    },
    {
        id: 123,
        email:"pk@google.com"
    },
    {
        id: 123,
        email:"pk@google.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in hindi",
    Price: "99",
    courseInstructor: "arshad"
}

course.courseInstructor

const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "arshad",
//     "coursename": "Js in Hindi",
//     "Price": "699"
// }

[
    {},
    {},
    {},
]





