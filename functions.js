// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting.
function greeting(greet1, greet2) {
    return;
}
var greet1 = "Hi,How are you?"
var greet2 = "hi,what is your name?"
console.log(greet1)
console.log(greet2)

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hello, ${name}!`;
}

var name1 = "David";
var name2 = "Adam"
console.log(customGreeting(name1))
console.log(customGreeting(name2))


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName, lastName) {
    return `${ firstName } ${ middleName } ${ lastName }`;
}
var fullName = greetPerson("David", "Nathaniel", "Swatzell")
var fullName2 = greetPerson("Gary", "Allen", "jones")
console.log(fullName)
console.log(fullName2)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    return number * number;
}
var number = 10
var sentence = `The square of ${number} is ${square(number)}`
var result = square(number)
console.log(result)
console.log(sentence)

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

// checkStock(4, "Coffee");
// => "Coffee is stocked"

// checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// => "Salsa - running LOW"