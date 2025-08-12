// Primitive Datatypes

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 344877676863678876332n;

// Refrence Types(Non-Primitive Datatypes)

// Array, Objects, Functions

const heros = ["shaktiman", "Naagraj", "doga"];

let myObject = {
  name: "Rijvan",
  age: 21,
};

const myfunction = function() {
    console.log("Hello World")
}

// console.log(typeof bigNumber)



// ++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)


let myYoutubename = "Thefunnyworld"

let anothername = myYoutubename

anothername = "Thefunnycricketers"

console.log(myYoutubename)
console.log(anothername)

let user1 = {
  email: "user@gmail.com",
  upi: "user@ybl1"
}

let user2 = user1

user2.email = "rijvan@google.com"

console.log(user1.email)
console.log(user2.email)
