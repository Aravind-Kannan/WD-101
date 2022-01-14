console.log("Ola, amigos!");

/**
 * Password has atleast 8 characters
 * 
 * Success - Password is atleast 8 characters
 * Failure - Otherwise, less than 8 characters
 */

let password = "abcd1234";

if (password.length >= 8) {
    console.log("Password is valid!");
} else {
    console.log("Sorry, your password has to be atleast 8 characters")
}


/**
 * 
 * Cannot sign up for this service with gmail address
 * 
 */

let email = "example@abcd.com";
let isGmailAddress = email.includes("@gmail.com");

if (isGmailAddress) {
    console.log("Sorry, you can not sign up with @gmail.com address");
} else {
    console.log("This is not a @gmail.com address. So, it is okay.");
}

/**
 * Enter new password    : [_____]
 * Confirm your password : [_____]
 * 
 * Password validation
 */

let password1 = "abcd12345";
let password2 = "abcd1234";

if (password1 === password2) {
    console.log("Both the passwords match!");
} else {
    console.log("Password 1: " + password1);
    console.log("Password 2: " + password2);
    console.log("Sorry, the passwords do not match!");
}

/**
 * 
 * Count the number of words in the document
 * 
 */

let essay = "This is an essay.";
let words = essay.split(" ");
let wordCount = words.length;
console.log("Word Count: " + wordCount);