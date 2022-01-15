# Web Development 101 - Getting started with JavaScript

Pupilfirst has open sourced the [course](https://www.pupilfirst.school/courses/1087)

There are 8 levels in this course. Here, are a few key personal takeways, or should I, rather say notes 😅, from each of those levels.

## Level 1 - Welcome to the course!

- Brief introduction to the Pupilfirst LMS and discussion forum modeled after Stack overflow
- Introduction to Web: Internet, Client & Server model, IP address and WWW
- Why Unix based systems? and Installation of Ubuntu, if not a Mac User
- Dev Environment Setup - Prettier Extension Setup

## Level 2 - Let's create our own websites!

- Introduction to HTML
- More into "Inspect element"
- Hosting on [glitch](https://glitch.com/)

- Visit my [creation](https://farm-story.glitch.me/) hosted on glitch

## Level 3 - Style Matters

- Using Cascading Style Sheets(CSS)

  - Inline
  - Embedded
  - External

- Tailwind CSS: a CSS framwork
- Note: [Reboot, Resets, and Reasoning](https://css-tricks.com/reboot-resets-reasoning/)
  - `undohtml.css`: Tantek Çelik - strip default styling
  - **Meyer reset**: Updated for HTML5 elements, else similar approach to Tantek's idea; one of the more popular resets
  - **Richard Clark's HTML5 Reset**: modified version of the Meyer reset, and the retained that spirit
  - **Minimal Approach**: plenty of developers who went minimal by just zapping margin and padding from everything
    ```css
    * {
      padding: 0;
      margin: 0;
    }
    ```
  - 🤡: `CSS-tricks` logo was insipired by the universal selector
  - `Normalize.css`:
    - didn’t remove any styling from elements that were already consistent across browsers
    - accommodating to the idea of altering it, rather than just including it
    - It calls itself, "modern, HTML5-ready alternative to CSS resets"
  - **Resets can be opinionated**
  - **Vanilla CSS Un-Reset**: meant to re-style elements after you un-style then with a reset
  - `MiniReset.css`: It does wipe out type styles “so that using semantic markup doesn’t affect the styling”, but leaves some defaults in place on purpose “so that buttons and inputs keep their default layout”, puts in some things that don’t have cross-browser problems but are useful globally (box-sizing), and adds some minor responsive design helpers.
  - Jonathan Neal created a reset called `santize.css` that is very clear about it’s opinions. Search for the word “opinionated” in the source code and you’ll see it 19 times. Sanitize calls itself a CSS library and doesn’t use the word “reset” anywhere except to cite the Meyer reset.
  - **Reboot**:
    - builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes.
    - doesn’t have its own repo, it’s a part of Bootstrap.
    - It’s definitely opinionated, but in a way that rolls with Bootstrap nicely. The fact that it’s buried within Bootstrap is pretty good signaling this is designed for that world, not as a drop-in for any project.
- Explained a few Tailwind CSS classes: p-[tailwind unit], m-[tailwind unit], bg-[color (standardColors)]-[intensity (50,100...800)], container

## Level 4 - Working with Strings

- `JavaScript` - Most popular Programming Language
- JavaScript Console available in browser
- `const` keyword creates immutable values
- In older scripts, you may also find another keyword: `var` instead of `let`
- [**Note on `the old 'var'`**](https://javascript.info/var#var-tolerates-redeclarations)

  - **var has no block scope**, i.e., they are either function-scoped or global-scoped: As we can see, var pierces through if, for or other code blocks. That’s because a long time ago in JavaScript, blocks had no Lexical Environments, and var is a remnant of that.
  - **var tolerates redeclarations**: If we declare the same variable with let twice in the same scope, that’s an error. With var, we can redeclare a variable any number of times.
  - **var variables can be declared below their use**: var declarations are processed when the function starts (or script starts for globals). In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function). People also call such behavior **“hoisting”** (raising), because all var are “hoisted” (raised) to the top of the function.
  - **Declarations are hoisted, but assignments are not.**
  - **IIFE**: In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).

    ```javascript
    // Ways to create IIFE

    (function () {
      alert("Parentheses around the function");
    })();

    (function () {
      alert("Parentheses around the whole thing");
    })();

    !(function () {
      alert("Bitwise NOT operator starts the expression");
    })();

    +(function () {
      alert("Unary plus starts the expression");
    })();
    ```

    -These differences make var worse than let most of the time.

- Join Strings together [string concatenation]
  - Using the `+` operator e.g.: `let greeting = prefix + firstName;`
  - Using the `concat` function e.g.: `let greeting = prefix.concat(firstName);`
- Including JS in HTML
- Comments in HTML and JavaScript
- Length of string: Using member variable for each string: `"<string>".length`
- Introduction to Conditionals
- String inside string[case sensitive]: `"str+substr".includes("substr")`
- Introduction to Booleans
- Substring functionality: `<string>.substring(start, end)`
  - Obtains the substring in the given string from `start` to `end - 1`
  - `start` is required, index starts from 0
  - `end` is optional
  - if `start < 0`, start = 0
  - if `start > end`, params are swapped
- Introduction to Comparision Operator `===`
- Introduction to Array: first collection based data structure
- Inplace sorting `<array>.sort()`
- Splitting strings by pattern `<string>.split(<pattern>)`

## Level 5 - Numbers, Booleans, Objects & Arrays

- Numbers
  - Representation: Difference between Number strings and numbers
  - Basic arithmetic calculation
  - Boolean comparisions
  - Convert string to number: `Number(<string>)` - if invalid number, then returns `NaN` [Not a number], else the actual numeric value of the string, alternatively, an `unary + operator` can be used
  - Math properties and functions
    - `Math.PI`
    - `Math.E`
    - `Math.pow(<base>, <exponent>)`
    - `Math.max(<arg1>, <arg2>, ..., <argN>)`
    - `Math.min(<arg1>, <arg2>, ..., <argN>)`
- Boolean
  - Relational operators (like `>=, <=, <, >`)
  - Logical operators (like `&&, ||, !`)
- Objects

  - For representing a single logical unit of data as key-value pairs

    ```javascript
    let masteryBook = {title: "Mastery", author: "Robert Greene", availableCount: 5, format: "paperback"};

    // access method 1: dot operator
    console.log(masteryBook.title);

    // access method 2: [] operator
    console.log(masteryBook["title]);
    ```

  - Create an object
  - Read an object
  - Update an object
  - Nested objects

- Arrays
  - Represent a collection of values
  - Array index begins at **zero**
  - Access an array element by index
  - Update array element at index
- Appreciate use of **passphrase over password**

## Level 6: Functions - code we can call multiple times!

- Creating function
  ```javascript
  let sayHello = () => console.log("Hello");
  sayHello();
  let greetHello = (name) => console.log("Hello, " + name);
  greetHello("Alan");
  ```
- When we refactor code the structure of the code changes. We do not change the functionality or the existing behaviour of the code.
- A function like console.log performs a side-effect. It does not return any value, but it prints the string we passed as argument to the web browser console.
- A function can return another function
- A function returns `undefined` when there is no `return` statement present in that function
- When functions are passed as arguments to other functions, we refer to them as **callback functions** or simply **callbacks**.

  ```javascript
  // callbackFunction called after time_in_ms expires
  let timeoutID = setTimeout(
    callbackFunction,
    time_in_ms,
    args_for_callback_function
  );

  // we can stop the execution of the callbackFunction before the time_in_ms expires by clearing it out
  clearTimeout(timeoutID);

  // callbackFunction with delay time_in_ms expires
  let intervalID = setinterval(
    callbackFunction,
    time_in_ms,
    args_for_callback_function
  );

  // we can stop the execution of the callbackFunction by clearing it out
  clearTimeout(intervalID);
  ```

- **Google** is your best friend!
