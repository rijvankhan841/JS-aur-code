// const tinderUser = new Object() // singtletone Object Declaration of object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Mohsin"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com ",
    fullname: {
        userfullname: {
            firstname: "Rijvan",
            lastname: "Khan"
        }
    }
} 

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2)

// console.log(obj3); 


// Spread Methods

const obj3 = {...obj1, ...obj2};
// console.log(obj3); 

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn")) 

// console.log(tinderUser.hasOwnProperty("isLogged"))


// Destructring of objects
const course = {
    coursename : " js in hindi",
    price: "999",
    courseInstructor: "hitesh" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor)

// API concepts

// {
//     "name": "rijvan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
