console.log("Welcome to the password validator tool")
console.log("Passwords must contain at least 10 characters and one of each of the following: upper case letter, lower case letter, number")
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.question("Validate a password: ", function(input){
	tokens = input.split(` `)
let password = tokens[0];
// console.log(password)

let hasNum = /[0-9]/
if(hasNum.test(password)){
    let capLet = /[A-Z]/
    if(capLet.test(password)){
        let lowLet = /[a-z]/;
        if(lowLet.test(password)){
            console.log(password)
             if(password.length < 10){
                console.log("Failure to validate, password not long enough")
             }else if(password.length >= 10){
                console.log("Password validation successful")
            }
        }else{
            console.log("Failure to validate, needs at least 1 lower case letter")
        }
    }else{
        console.log("Failure to validate, needs at least 1 capital letter")
    }
}else{
    console.log("Failure to validate, needs at least 1 number.")
}
reader.close()
  });