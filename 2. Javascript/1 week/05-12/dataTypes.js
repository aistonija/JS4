// Duomenu tipai - Data Types

// String
const nickName = "aistonija";
const name = "Aiste";

// naudojant iprastas kabutes
console.log("my name is " + name + ", and nickname is " + nickName);

// naudojant backticks
console.log(`my name is ${name}, and nickname is ${nickName}`);

// Number
const number = 15;

const negativeNum = -56;

// String and Number

console.log(name + number);

const number2 = 3.14;

// Boolean

const dayTime = true;
const nightTime = false;

// console.log(typeof name);
// console.log("duomenu tipas: ", typeof true);
// console.log(typeof nightTime);

let isIsland = false;

// null

let age = null;
console.log(age);

// undefined

let myAge;
console.log(myAge);

// NaN

console.log("aiste" / 5);

// Array

let students = ["Aristidas", "Augustinas", "Darius", "Edgaras"];

console.log(students[0]);

// Object

let person = {
  firstName: "Aiste",
  eyes: "gray",
  hasKids: false,
  hasCats: true,
  catNames: ["Lexa", "T'challa"],
  age: 16,
};

console.log(person);
console.log(person.firstName);
