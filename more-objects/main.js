let object = {
  name: "Neven",
  lastname: "Josipovic",
  age: 27,
  hobbies: ["jogging", "cooking", "singing"],
};

let jsonString = JSON.stringify(object);
const div = document.querySelector("#output-json");
div.innerHTML = jsonString;

let object2 = JSON.parse(div.innerHTML);

console.log(object2);

class User {
  constructor(firstName, lastName, age, role, active) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.role = role;
    this.active = active;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const neven = new User("Neven", "Josipovic", 27, "Programmer", false);

console.log(neven);

const object3 = {
  role: 15,
  name: "Pera",
  last: "Liht",
  godine: 33,
  active: false,
};

console.log(object3);

const pera = new User(
  object3.name,
  object3.last,
  object3.godine,
  object3.role,
  object3.active
);

console.log(pera.fullName());

function cutString(string, from, to) {
  return string.slice(from, to);
}

console.log(cutString("Neven", 2));

const favoriteRecipe = {
  title: "RashtanEggsEggplant",
  servings: 3,
  ingredients: ["rashtan", "eggs", "eggplant"],
};

console.log(
  favoriteRecipe.title +
    " Recipe" +
    " Serves: " +
    favoriteRecipe.servings +
    " Ingredients: " +
    favoriteRecipe.ingredients.join(" - ")
);

const library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort((a, b) => a.libraryID - b.libraryID);
console.log(library);

const user = {
  firstName: "Petronije",
  lastName: "Jovaničević",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  age: 38,
  role: 3,
  active: false,
};

for (key in user) {
  console.log(key);
}

const student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(student);
delete student.rollno;
console.log(student);

const library2 = [
  { author: "Bill Gates", title: "The Road Ahead", alreadyRead: true },
  { author: "Steve Jobs", title: "Walter Isaacson", alreadyRead: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    alreadyRead: false,
  },
];

for(key in library2) {
    console.log(library2[key].author + " " + library2[key].title + " readingStatus: " + library2[key].alreadyRead);
}

for(key in library2) {
    if(library2[key].alreadyRead) {
        console.log("You already read: " + library2[key].title + " By: " + library2[key].author);
    } else {
        console.log("You still need to read: " + library2[key].title + " By: " + library2[key].author);
    }
}

const object4 = {
    name: "Neven",
    lastName: "Josipovic",
    age: 27
};

function convertToArray(object) {
    return Object.entries(object);
}

console.log(convertToArray(object4));

function checkProperty(object, property) {
    return object.hasOwnProperty(property);
}

console.log(checkProperty(object4, 'name'));
console.log(checkProperty(object4, 'lastName'));
console.log(checkProperty(object4, 'fullName'));

function Fish(name, separator) {
    this.name = name;
    this.separator = separator;
    this.fullName = function() {
        if(separator) {
            return this.name + " Fish";
        } else {
            return this.name + "fish";
        }
    }
}

const angel = new Fish('Angel', true);
const mandarin = new Fish('Mandarin', false);
const cat = new Fish('Cat', false);
const surgeon = new Fish('Surgeon', true);

console.log(angel.fullName(), mandarin.fullName(), cat.fullName(), surgeon.fullName());






