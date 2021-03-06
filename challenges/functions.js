// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */
function consume(param1, param2, cb) {
    // getLength passes the length of the array into the callback.
    return cb(param1, param2)
}

function consume2(x, y, cb) {
    return cb(x.y)
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(num1, num2) {
    return num1 + num2
}

console.log(consume(2, 2, add))

function multiply(num1, num2) {
    return num1 * num2
}

console.log(consume(10, 16, multiply))

function greeting(first, last) {
    return `Hello ${first} ${last}, nice to meet you!`
}

console.log(consume("Mary", "Poppins", greeting))

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2, 2, add) // 4
// consume(10, 16, multiply) // 160
// consume("Mary", "Poppins", greeting) // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

const external = "I'm outside the function"

function myFunction() {
    console.log(external)
    const internal = "Hello! I'm inside myFunction!"

    function nestedFunction() {
        console.log(internal)
    }
    nestedFunction()
}
myFunction()
console.log(external)

//console.log(internal) *This won't work because internal is not on the global scope, it is local to the enclosing function. I remember is as, you can go in, but not come out (scope, that is.)

// nestedFunction can access the variable 'internal', because in JS we have access to variables defined in enclosing functions(even after the enclosing
//   function which defines these variable has returned).
// The internal variable is within the lexical environment of the nestedFunction.An environment has access to its parent 's environment, and it'
// s parent environement has access to it 's parent environment, and so on. This is known as scope chain.
