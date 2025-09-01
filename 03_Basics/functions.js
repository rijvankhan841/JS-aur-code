function sayMyName() {
  console.log("R");
  console.log("I");
  console.log("J");
  console.log("V");
  console.log("A");
  console.log("N");
}

// sayMyName()

function addTwoNum(n1, n2) {
  // console.log(n1 + n2)

  // let result = n1 + n2
  // return result
  return n1 + n2;
}

const result = addTwoNum(3, 5);

// console.log("Result: ", result);

function loginUserMsg(username = "rizzu") {
  // if(username === undefined){
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMsg("Rijvan"))
// console.log(loginUserMsg("Rizwan Meer"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 700))

const user = {
  username: "rizzu",
  price: 299,
};
function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]))
