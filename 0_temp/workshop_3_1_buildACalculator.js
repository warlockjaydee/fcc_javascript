function greet() {
	return "Hello World";
}

console.log(greet());


/*STEP 4*/
function addTwoAndSeven() {
  return 2 + 7;
}

console.log(addTwoAndSeven());

function addThreeAndFour() {
  return 3 + 4;
}

console.log(addThreeAndFour());


/* Step 5
Even though the functions work as expected, there is a lot of repetition in your code.

Since you are building a calculator, you don't want to have to create a function for every possible combination of numbers you want to add together.

It would be better to create a single reusable function that can add any two numbers together.

Remove all of the code you have written so far.

In the next step, you will review how to work with parameters and arguments in functions. */


/* STEP 6:
In previous lessons, you learned how to work with function parameters.

A function parameter is a variable that is defined in the function's declaration and acts as a placeholder.

Here is an example of a function that has a parameter:

Example Code
// The parameter is `name`
function greetUser(name) {
  return `Hello, ${name}!`;
}
Declare a function called calculateSum that takes two parameters, num1 and num2.
*/

function calculateSum(num1, num2) {
  
}

/* STEP 7
Inside your calculateSum function, you will need to return the sum of the two parameters.
/*

function calculateSum(num1, num2) {
  return num1 + num2;
}

/* STEP 8
The advantage of functions is that they can be called with different arguments, allowing you to reuse the same code with various values.

Here are some example function calls with different string arguments:

Example Code
// function definition
function greetUser(name) {
  console.log(`Hello ${name}!`);
}

// function calls
greetUser("John"); // "Hello John!"
greetUser("Jane"); // "Hello Jane!"
Add a console.log that calls the calculateSum function with the arguments 2 and 5.
*/

function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2,5));

/* STEP 9
To further test out your calculateSum function, you will need to call it with different arguments.

Add another console.log that calls the calculateSum function with the arguments 10 and 10.

Below that console.log, add another console.log that calls the calculateSum function with the arguments 5 and 5.
*/

function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10,10));
console.log(calculateSum(5,5));

/* STEP 10
Now that your calculator can add two numbers together, it is time to create a function that will subtract two numbers.

Declare a function called calculateDifference that takes two parameters, num1 and num2.

Inside the function, return the difference between the two parameters.
*/

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

const calculateDifference = (num1, num2) => {
  return num1 - num2;
}

OR 

function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}
















