let isValidPassphrase = (text) => {
  let words = text.split(" ");

  let minimumFourWords = words.length >= 4;

  let minimumTwoCharsEach = words.every(word => word.length >= 2);

  let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;

  // Let's "return" the value from this function. We'll learn more about this in the next level.
  return conditionsSatisfied;
}

// Don't alter the `module.exports` line below - if you want to test your code, copy and
// paste the function, starting from `let isValidPassphrase = ...` to the final closing
// brace `}` into the browser's console, and call the function with different values.
//
// For example: `isValidPassphrase("this should be enough")`
//
// IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
// file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
// function and use it.
module.exports = isValidPassphrase;
