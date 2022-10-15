// For each expression, predict what you think the output will be in a comment (//) without first running the command. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Example // typeof("potato") // Prediction: Vegetable // Actual: String

// What is the output of each of the expressions below?
// typeof(15) typeof(5.5) typeof(NaN) typeof("hello") typeof(true) typeof(1 != 2) "hamburger" + "s" "hamburgers" - "s" "1" + "3" "1" - "3" "johnny" + 5 "johnny" - 5 99 * "luftbaloons"

console.log(typeof(15));
// Prediction: number
// Actual: number
// Wooohooo got the first one

console.log(typeof(5.5));
// Prediction: number or float not sure since float is not a JavaScript type
// Actual: number
// Woohoo I was right

console.log(typeof(NaN));
// Prediction: number or undefined or null. I know that NaN is not a type, my first guess is number. If it's not number then my second guess would be undefined or null.
// Actual: number
// Woohooo I am getting goood at this

console.log(typeof("hello"));
// Prediction: "string"
// Actual: string
// I thought it would be quoted because I saw  in code that they compared typeof(some-value) with === "string". Apparently the result of typeof("String value") is string but when comparing typeof("String value") you can't compare without double quotes.

if(typeof("This is a string value") === "string") {
    console.log("True");
} else {
    console.log("False");
}

// When comparing with strict equality it works when I put it in quotes that's why I thought the result of typeof("hello") would be "string", but does it work when compared to string without quotes?

console.log(typeof(true));
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2));
// Prediction: boolean since equality checks return a boolean value in this case true
// Actual: boolean

console.log("hamburger" + "s");
// Prediction: "hamburgers" since binary + when used on strings concatenates(merges) them
// Actual: "hamburgers"

console.log("hamburger" - "s");
// Prediction: isNaN since binary = converts values to numbers and tries to do subtraction
// Actual: NaN

console.log("1" + "3");
// Prediction: "13" since binary + when used on strings concatenates them
// Actual: 13

console.log("1" - "3");
// Prediction: =2 since binary - converts operands to number and does subtraction on them
// Actual: -2

console.log("johnny" + 5);
// Prediction: "johnny5" since binary + converts numbers to strings and then concatenates the string.

console.log("johnny" - 5);
// Prediction: NaN since binary - converts operands to number
// Actual: NaN

console.log(99 * "luftbalons");
// Prediction: 99luftbaloons
// Actual: NaN