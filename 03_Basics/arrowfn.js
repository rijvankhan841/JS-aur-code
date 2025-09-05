// const user = {
//     username: "rijvan",
//     price: 999,
//     welcomeMsg : function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }
//user.welcomeMsg()
//user.username = "rizzu"
//user.welcomeMsg()

// console.log(this)

// function chai() {
//     let username = "rijvan"
//     console.log(this.username)
// }
// chai()

// Arrow function

// const chai = function () {
//     let username = "rijvan"
//     console.log(this.username)
// }

// const chai = () => {
//     let username = "rizwan"
//     console.log(this)
// }
// chai()


//const addTwo = (num1, num2) => {
  //  return num1 + num2
//}

//const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 +num2)

const addTwo = (num1, num2) => ({username: "rijvan"})

console.log(addTwo(4,5))  