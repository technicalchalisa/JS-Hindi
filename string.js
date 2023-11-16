// const score = 100 
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// console.table(typeof score);

// // Array
// const user = ['Arshad', '20', 'workforarshad@gmail.com', 'Bihar']

// const userInfo = {
//     name:"Arshad Alam",
//     age:20,
//     emai:"workforarshad@gmail.com",
//     state:"Bihar"
//                 }

// console.log(user[2]);
// console.log(userInfo.name);


// const name = "Arshad"
// const repoCount = 50
// console.log(name + repoCount + "value");
// console.log(`hello my name is ${name} and my repcount is ${repoCount}`);

const gameName = new String('Arshad');
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.concat("Alam"));
console.log(gameName.charAt(3));
console.log(gameName.indexOf("r"));
console.log(gameName.substring(0, 3));
console.log(gameName.slice(-8, 5));

const newString = "     WebDevPro     "
console.log(newString);
console.log(newString.trim());

const url = "https://arshad.com/loop%20javascript"

console.log(url.replace('%20', '-'));
console.log(url.includes('java'));

console.log(url.split('/'));