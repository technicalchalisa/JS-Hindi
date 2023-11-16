Array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myHeros = ["Shaktiman", "Sharukhkhan", "Divya Bharti","Nagama", "Amarpali", "Shilpashety"]
console.log(myHeros[1]);

// Array methods
myHeros.push("Amitab Bachan")
myHeros.pop()
myHeros.unshift("Jinee")
myHeros.shift()

console.log(myHeros.includes("Sharukhkhan"));
console.log(myHeros.indexOf("Sharukhkhan"));

const newArray = myHeros.join()
console.log(typeof myHeros);
console.log(typeof newArray);


const myn1 = myHeros.slice(1,3)
const myn2 = myHeros.splice(1,3)
console.log("A", myn1);
console.log("B", myn2);
console.log("C", myHeros);

myHeros.push(myAct)

console.log(myHeros);
console.log(myHeros[3][1]);

const myJoiArr = myHeros.concat(myAct)
console.log(myJoiArr);


const all_heros = [...myHeros, ...myAct]
console.log(all_heros);

const myHeros = ["Shaktiman", "Sharukhkhan","Nagama"]
const myAct = [ "Divya Bharti", "Amarpali", "Shilpashety"]

const another_array = [1, 2, 3, [4, 5, 6],7 [8, 9,[10, 11]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("Arshad"));
console.log(Array.from("Arshad"));
console.log(Array.from({name:"Arshad"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
