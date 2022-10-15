// [ia00zec8] For each expression, predict what you think the output will be in a comment (//) without first running the command. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Example
// console.log(true === false) // Prediction: Vegetable // Actual: String
// What is the output of each of the expressions below?
// true === true true == true true == 1 false === "false" false === FALSE 2 == true
// 'iamstring'
// ''
// 00
// null typeof(true) == bool typeof(true) === typeof(false)
// true && false
// true || false
// true > false
// 2 > 1 && 3 === 3 || 2 == 1

console.log(true === false) // Prediction: false // Actual: false since the result of equality check is a boolean value true or false
console.log(true === true) // Prediction: true // Actual: true
console.log(true == true) // Prediction: true // Actual: true
console.log(true == 1) // Prediction: true // Actual: true since 1 is converted to true when checking with non strict equality
console.log(false === "false") // Prediction: false // Actual: false since strict equality doesn't convert types so boolean false and string false are not equal
// console.log(false === FALSE) // Prediction: Error // Actual: Uncaught ReferenceError FALSE is not defined
console.log(2 == true) // Prediction: true I am not sure about this one any value that is not falsy is considered true so it's true. Falsy values are 0, -0, 0n, false, null, and undefined. This is a rule for evaluating conditional statements // Actual: false  
console.log('iamstring') // Prediction: 'iamstring' // Actual: iamstring // it's without quotes
console.log('') // Prediction: false Actual: // empty value // I thought of false because of conditional evaluation
console.log(00) // Prediction: 0 Actual: 0 // I don't know why it was a lucky guess
console.log(null) // Prediction: undefined // Actual: null
// console.log(typeof(true) == bool) // Prediction: Error // Actual: Uncaught ReferenceError bool is not defined
console.log(typeof(true) === typeof(false)) // Prediction: false // Actual: true
console.log(true && false) // Prediction: false // Actual: false // since && returns the last value or first false one
console.log(true || false) // Prediction: true // Actual: true // || returns the first truthy value or last one if none are found
console.log(true > false) // Prediction: true // Actual: true // It could be true if they are compared as: is 1 > 0
console.log(2 > 1 && 3 === 3 || 2 == 1) // Prediction: 3 === 3 // Actual: true // since it's the first truthy value of the || operator 