// Each example below has at least one opportunity for improvement.

// YOUR TASK:
// Modify the code to make that improvement(s)
// write a JS comment to explain what you changed, and why
// make sure the code you submit WORKS - you can run this entire file 
// using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
    return ("Hello, what is your name?")
}

console.log(askForName())
    // askForName() I took out that xtra askForName because it was unnecesary and turned it into a proper function with a return value.

// EX 2:

function addThreeNums(first, second, third) {
    var sum = first + second + third
    return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));

// I added console.log so that it would return the sum of the numbers


// EX 3:
function makeFreshPesto() {
    return ("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper. Pulse basil and pine nuts. Add garlic and cheeses. Slowly pour in oil.Season");
}

console.log(makeFreshPesto());
// took out all the individual console.logs and just made it to return the recipe when called


//  EX 4:
function average(sum, avg) {
    var sum = 2 + 3;
    var avg = sum / 2;

    return avg
}
console.log(average())
    // I changed the arguments so that the function now tells you what the sum is divided by 2