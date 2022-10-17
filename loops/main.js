// Loop Math
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")

for(let i = 0; i <= 10; i++) {
    console.log(i + " * 9 = " + i * 9);
}


// Spin 151
// Write a Loop that will spin exactly 151 times. 
// Output the amount of spins i only once, on the last loop.
let i = 0
while(i <= 151) {
    if(i == 151) {
      console.log(i);  
    }
    i++;
}

// Odd and Even numbers
// Your task is to create a loop that prints out all 
// the odd numbers between 1 and 100...twice! Your solution must be 
// exactly one for loop and one while loop.

// Bonus: Try doing this using a single for loop. Make it so that the first iteration 
// of the loop prints out all odd numbers between 1 and 100 but the second 
// iteration of the loop prints out all of the even numbers between 1 and 100


for(let i = 0; i <= 100; i++) {
  if(i % 2 == 1) {
    console.log(i, "Odd numbers for loop");
  }
}

for(let x = 0; x <= 100; x++) {
  if(x % 2 == 0) {
    console.log(x, "Even numbers for loop");
  }
}


let y = 0;
while(y <= 100) {
  if(y % 2 == 1) {
    console.log(y, "Odd numbers while loop");
  }
  y++;
}

// Cars List
// You are presented with an array of cars. Your task is to concatenate and output
// this array into the DOM, every car on a new line. For this particular part of the assignment,
// you are allowed to use document.write. You must use a loop for this operation.

// Bonus. Export everything as an ordered list?

// Bonus 2. Do it withtout a loop, but not one by one?

// Bonus 3. Do it without document.write?

let cars = ['Renault', 'Peugeot', 'Mazda', 'Mercedes', 'Yugo', 'Honda'];
const displayCars = document.querySelector("#display-cars");
// let html = "";

// for(let i = 0; i < cars.length; i++) {
//   document.write(cars[i] + "<br>");
// }

// for(let i = 0; i < cars.length; i++) {
//   html += "<li>" + cars[i] + "</li>";
// }
// displayCars.innerHTML = html;

let html = "";
cars.map((car) => {
  return html += "<li>" + car + "</li>";
});

displayCars.innerHTML = html;


// Fruit Array Loop
// You have to create an array that will hold 5 different kinds of fruit. After each step, output to the console
// Add two more types of fruit to the beginning of the array.
// Delete last element from the array.
// Add two more to the end of the array
// Now you have array with 8 elements - delete element 3 and 4, and replace them with other 2 elements
// Create a FOR loop that will output all elements of this array, one by one in the console

let fruits = ["kiwii", "mango", "papaya", "banana", "watermelon"];

fruits.unshift("orange", "apple");

fruits.pop();

fruits.push("tangerine", "grapefruit");

fruits.splice(2, 2, "grapes", "plums");

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Loop Steps
// Write a for loop that gets the computer to count down from 100
// until 0 each time decrementing by 5. Print the i every loop, but this time, make sure not to print 0.

for(let i = 100; i > 0; i = i - 5) {
  console.log(i);
}


// Loops homework
// This homework consists of 3 problems.
// 1. Write a script that asks the user to input 5 numbers
// (either in 5 prompts or 5 text-boxes) and outputs
// the smallest number that the user entered.

// todo - prompt returns 0 when nothing is entered I want it to prompt again in that case
let firstNumber;
do {
  firstNumber = prompt("Input a number");
} while (isNaN(firstNumber))

let secondNumber;
do {
  secondNumber = prompt("Input a number");
} while (isNaN(secondNumber))

let thirdNumber;
do {
  thirdNumber = prompt("Input a number");
} while (isNaN(thirdNumber))

let fourthNumber;
do {
  fourthNumber = prompt("Input a number");
} while (isNaN(fourthNumber))

let fifthNumber;
do {
  fifthNumber = prompt("Input a number");
} while (isNaN(fifthNumber))

let smallestNumber = Math.min(+firstNumber, +secondNumber, +thirdNumber, +fourthNumber, +fifthNumber);
document.querySelector("#smallest-number").innerHTML = smallestNumber;

// 2. Write a program that prints the values, using loops
// 10
// 100
// 1000
// 10000
// 100000
// 1000000
// 10000000
// 100000000
// 1000000000
// 10000000000
// 100000000000

let numberIncremented = "";
for(let i = 10; i <= 100000000000; i*=10 ) {
   numberIncremented += "<li>" + i + "</li>";
}
document.querySelector("#display-numbers").innerHTML = numberIncremented;

// 3. Prompt the user for one number (N) and calculate the factorial (N!).
// explanation: the factorial of a number N is calculated by this formula N! = N * (N-1) * (N-2) * ... * 2 * 1
// for N = 5 the factorial is N! = 5 * 4 * 3 * 2 * 1 = 120
let promptNumber = +prompt("Enter a number");
function factorialN(num) {
  if(num < 2) return 1;
  return num *= factorialN(num - 1)  
}
console.log(factorialN(promptNumber));