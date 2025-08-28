//singleton
// object.create

//  object literals 


const mySym = Symbol("key1")

const JsUser = {
    name: "Rijvan",
    "full name" :" Rijvan khan",
    [mySym]: "mykey1",
    age: 18,
    location: "baghpat",
    email: "rijvank118@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser ["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rijvan@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "rijvan@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");
}

JsUser.greetingTwo = function() {
    console.log(` Hello Js user, ${this.name}`)
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())



    


















// const mySym = Symbol("key1")

// const myUser = {
//     name: "Rijvan",
//     "full name": "Rijvan Khan",
//     [mySym]: "mykey1",
//     age: 21,
//     class: 12,
//     email: 'rijvank118@gmail.com',
//     location: "Baghpat",
//     district: "Meerut"
// }

// console.log(myUser.email)
// console.log(myUser["email"])
// console.log(myUser["full name"])
// console.log(myUser[mySym]);

