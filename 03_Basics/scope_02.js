// var c =300

let a = 300

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "rijvan"
  
  function two(){
     const website = "youtube"
     console.log(username)
  }
  // console.log(website);

  // two()

}
// one()

if(true) {
  const username = " rijvan "
  if(username === " rijvan ") {
    const web = " youtube "
    console.log(username  +  web)
  }
  // console.log(web)
}

// console.log(username);


// ++++++++++++++++ interesting +==========

console.log(addone(5))

function addone(num){
  return num + 1
}


// error throwing

addTwo(5)
const addTwo = function(num){
  return num + 2
}


