// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();



// the includes() method is being called on the string "hello world"
// An argument "hello" is being passed which is basically asking if "hello world" includes "hello" which it does so the return value will be true


"Hello World".endsWith("Hello");
// the endsWith() method is being called on the string "hello world" 
// An argument "hello" is being passed which is basically asking if "hello world" ends with "hello" which it does not so the return value will be false



"Hello World".endsWith("rld");
// the endsWith() method is being called on the string "hello world" 
// An argument "rld" is being passed which is basically asking if "hello world" ends with "rld" which it does so it would return true




// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var middleName = "Nathaniel"
var lastName = "Swatzell"
console.log(middleName.toUpperCase())
    // The toUpperCase() method is called on the variable middleName
    // No arguments are passed; it will return the middle name in upper case letters.

console.log(lastName.endsWith("ell"))
    // The endsWith() method is called on the variable lastName
    // an arguments ell is passed; it will return the word true because it indeed does end with ell




// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.
var ticketPrices = [87, 67, 99, 90, 87];
console.log(ticketPrices.indexOf(67))
    //the indexOf method is called will return what position 67 is in the array which is 1
var students = ["David", "Adam", "Ryan", "Pat"]
console.log(students.includes("cory"))
    // The includes method is called asking if the array includes the name cory which it does not so it will return false