## JSON Conversion

Write a JS program that has an object.
Convert the object into a JSON string, and output it to a div on the page.
After this is done, read the string from the DOM element, and convert it into an object and console log it.

## User Class

1. Write a JS program that has a template/class for a User based on the schema provided below:

User {firstName (string), lastName (string), age (int), role (int), active (bool), fullName() (string)}

Test it out by instancing a test object and console logging it.

2. Take the JSON string, provided below, and save it into a variable:

{"role":15,"name":"Pera","last":"Liht","godine":33,"active":false}

Convert the provided JSON into an object.
Now create a new User object, from our User class, based on the values provided in the JSON.
Console log this new User's fullName.

## String Prototype

Extend a string prototype. Write a JavaScript program which returns a subset of a string.

## Recipe book

Never forget another recipe! Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole Recipe Serves: 2 Ingredients: - cinnamon - cumin - cocoa

## Library Object

Write a JavaScript program to sort an array of JavaScript objects by library ID.

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 } ];

## List Properties of JS Object

Write a JavaScript program to list the properties of a JavaScript object.

Sample Output: name,sclass,rollno
var user = { "firstName": "Petronije", "lastName": "Jovaničević", "fullName": function() { return this.firstName + " " + this.lastName; }, "age": 38, "role": 3, "active": false };

## Delete Property

Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

## Library Reading Status

Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false } ];

## Library Reading Status 2

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


## Object Dump

Write a JavaScript function to convert an object into a list of '[key, value]' pairs.

## Check if property Exists

Write a JavaScript function to check if an object contains given property.

## Fish Class

The class will have two properties, species name, and separator boolean.

The class will also have a method which returns the full name of the fish based on these two values.

For example:

Angel, true = Angel Fish

Mandarin, false = Mandarinfish

Cat, false = Catfish

Surgeon, true = Surgeon Fish