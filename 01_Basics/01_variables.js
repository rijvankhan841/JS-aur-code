const accountId = 144553
let accountEmail = "Rijvan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState ;

// accountId = 2    not allowed 

accountEmail = "hc@hc.com"
accountPassword = "2121111"
accountCity = "Bengaluru"

console.log(accountId)


/*
Prefer not to use var
because of isssue in block scope and functional scope
*/
console.table([accountId,accountEmail, accountPassword,accountCity,accountState])