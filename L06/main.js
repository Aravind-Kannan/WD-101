/**
 * Refactor: Custom message printed in the function as side-effect
 * 
 * Password Validation
 * 
 * Rules :- 
 * 1. Both the passwords entered by the user must match
 * 2. The password length must be at least 8 characters
 * 
 */

// let printPasswordStatus = (password1, password2) => {
//  let isMatchingPasswords = password1 === password2;
//  let isRequiredLength = password1.length >= 8;
 
//  let isValidPassword = isMatchingPasswords && isRequiredLength;
 
//  if (isValidPassword) {
//      console.log("This password is valid!");
//  } else {
//      console.log("Sorry, this password is invalid!");
 
//      if(!isMatchingPasswords) {
//          console.log("Fix: The passwords do not match.");
//      }
 
//      if(!isRequiredLength) {
//          console.log("Fix: The password should be atleast 8 characters long.");
//      }
//  }
// }

// let password1 = "abcd123456";
// let password2 = "abcd123456";

// printPasswordStatus(password1, password2);
// printPasswordStatus("abcdefghi", "abcdefghi");


/**
 * 
 * Refactor: Custom message returned from the function
 * 
 * Password Validation
 * 
 * Rules :- 
 * 1. Both the passwords entered by the user must match
 * 2. The password length must be at least 8 characters
 * 
 */

 let printPasswordStatus = (password1, password2) => {
    let isMatchingPasswords = password1 === password2;
    let isRequiredLength = password1.length >= 8;
    
    let isValidPassword = isMatchingPasswords && isRequiredLength;
    
    if (isValidPassword) {
        return { status: "success" };
    } else {
        let reasons = [];

        if(!isMatchingPasswords) {
            reasons.push("Fix: The passwords do not match.");
        }
        
        if(!isRequiredLength) {
            reasons.push("Fix: The password should be atleast 8 characters long.");
        }

        return { status: "failed", reasons: reasons };
    }
}

let password1 = "abcd12";
let password2 = "abcd1234567";

let returned = printPasswordStatus(password1, password2);

if (returned.status === "success") {
    console.log("This password is valid!");
} else {
    console.log("Sorry, this password is invalid!");
    console.log(returned.reasons);
}
