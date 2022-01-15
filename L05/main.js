/**
 * Password Validation
 * 
 * Rules :- 
 * 1. Both the passwords entered by the user must match
 * 2. The password length must be at least 8 characters
 * 
 */

let password1 = "abcd123456";
let password2 = "abcd123456";

let isMatchingPasswords = password1 === password2;
let isRequiredLength = password1.length >= 8;

let isValidPassword = isMatchingPasswords && isRequiredLength;

if (isValidPassword) {
    console.log("This password is valid!");
} else {
    console.log("Sorry, this password is invalid!");

    if(!isMatchingPasswords) {
        console.log("Fix: The passwords do not match.");
    }

    if(!isRequiredLength) {
        console.log("Fix: The password should be atleast 8 characters long.");
    }
}