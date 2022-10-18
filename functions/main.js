// Join Array Members Function

// Write a simple JavaScript program to join all elements of the following array into a string.

let pangram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

function joinArray(array) {
  return array.join(",");
}

console.log(joinArray(pangram));

// Check Type Function

// Write a JavaScript function to check whether the input argument is an array or not. The function should return a boolean value.
// Output a few different cases/results into the console.

function isArray(array) {
  return Array.isArray(array);
}

console.log(isArray([0, 0, 7]), "Expected result: true");
console.log(isArray(["lucky", 8]), "Expected result: true");
console.log(isArray("a string"), "Expected result: false");
console.log(isArray(8), "Expected result: false");

// Multi-layer joining Function

// Write a JavaScript program which prints all the elements of the following array one by one.

let allTheNumbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
// Now use that same program to join all those elements into a string, and output this string into a H1 tag on the body.

function printArray(array) {
  for (let i in array) {
    for (let y in array[i]) {
      console.log(array[i][y]);
    }
  }
  return;
}

printArray(allTheNumbers);

function showString(array) {
  return (document.querySelector("#my-string").innerHTML = array.join(","));
}

showString(allTheNumbers);

// Array Segment Function

// Write a JavaScript function to get the first element of a predefined array.
// Passing an integer parameter n will return a small array with the first n elements of the array.

let array = [0, 1, 5, 9, 12, 27, 38];

function firstElement(array, n) {
  if (n) {
    return array.splice(0, n);
  }
  return array.shift();
}

console.log(firstElement(array));
console.log(firstElement(array, 3));

// Switch Function

// Write a JavaScript program to check a given integer is within range:

// True if 20 to 100
// False if 101 to 400
// Void if less than 20 or more than 400

// Console log at least 4 different cases.

function integerRange(integer) {
  if (integer >= 20 && integer <= 100) {
    return true;
  } else if (integer > 100 && integer < 400) {
    return false;
  } else {
    return undefined;
  }
}

console.log(integerRange(21), "Expected result is true");
console.log(integerRange(101), "Expected result is false");
console.log(integerRange(400), "Expected result is undefined");
console.log(integerRange(007), "Expected result is undefined");


// Find Largest Function
// Write a JavaScript program to find the largest of three given integers.
// In other words, a function that will accept three arugments, and then return the largest one.

function largestNumber(x,y,z) {
    if(x > y) {
        return x;
    } else if (y > z) {
        return y;
    } else {
        return z;
    }
}

console.log(largestNumber(10, 20, 30));
console.log(largestNumber(60, 40, 50));
console.log(largestNumber(70, 90, 80));


// Nearest to 100 Function
// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

function nearestTo100(x, y) {
    if(Math.abs(x - 100) > Math.abs(y - 100)) {
        return y;
    } else {
        return x;
    }
}

console.log(nearestTo100(101, 102));
console.log(nearestTo100(102, 101));
console.log(nearestTo100(90, 50));
console.log(nearestTo100(50, 80));
console.log(nearestTo100(-50, -80));


// Global Variable Function

// Write a JavaScript program with a prompt and a button on screen.

// Whenever a button is pressed, user is prompted for value and the value from input is passed to an array.

// This array should be written in the h1 tag on body. No blank or null items allowed.

// Tip: You might have to use a global variable for this one.

let enteredValues = [];
document.querySelector("button").addEventListener("click", askUser);

function askUser() {
    let storedValue = prompt("Enter a value");
    if(storedValue == "") {
        alert("No empty values");
        return;
    }
    enteredValues.push(storedValue);
    return document.querySelector("#user-values").innerHTML = enteredValues;
}
