// Conditions, ternary & switch
// let result = condition ? value1 : value2;
// let accessAllowed = (age > 18) ? true : false;
// the same
// let accessAllowed = age > 18;

// let age = prompt("age?", 18);

// original if
// if (age < 3) {
//   message = "Hi, baby!";
// } else if (age < 18) {
//   message = "Hello!";
// } else if (age < 100) {
//   message = "Greetings!";
// } else {
//   message = "What an unusual age!";
// }

let age = 17;
let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

console.log(message);

/*
The first question mark checks whether age < 3.
If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon ‘":"’, checking age < 18.
If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon ‘":"’, checking age < 100.
If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon ‘":"’, returning 'What an unusual age!'
*/

/* ********************* */
// country/population ternary task

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );

/* ********************* */

// Non-traditional use of ‘?’
// 1. prompt asking for name, without default value
// 2. check if it was not empty. if true - log to the console - "Hi, name entered", otherwise do not log anything.

// let input = prompt("Please enter your name");
let input = "Etsia";
// let fName = "Aiste";
input != "" ? console.log(`Hi there, ${input}`) : null;

/* ********************* */
// check if name is wrong, if yes change name to 'Dzionis', if no log name
// use ternary ? operator

let firstName = "Jonas";
let wrongName = true;

wrongName ? (firstName = "Dzionis") : console.log(firstName);

/* ********************* */
// check if date one is bigger than date two if yes log date one
// if not subtract date one from date two and log the answer

let dateOne = 1991;
let dateTwo = 2020;

// 1.
dateOne > dateTwo ? console.log(dateOne) : console.log(dateTwo - dateOne);
// 2.
console.log(dateOne > dateTwo ? dateOne : dateTwo - dateOne);

/* ********************* */
//  make sumOfOneAndTwo value to be sum of numberOne and numberTwo, check if it is greater than 200, if not, increase sumOfOneAndTwo with any mathematical expresion to be more than 200

// let numberOne = Number(prompt("Enter Number 1"));
// let numberTwo = Number(prompt("Enter Number 2"));
let numberOne = 30;
let numberTwo = 19;
let sumOfOneAndTwo = numberOne + numberTwo;

console.log(
  sumOfOneAndTwo < 200
    ? sumOfOneAndTwo + (200 - sumOfOneAndTwo) + 1
    : sumOfOneAndTwo
);

/* ********************* */
// check if first is not equal to second, if not do something so they both are equal

let first = 12;
let second = 88;

first != second ? (second = first) : null;
console.log(first, second);
/* ********************* */
// check if all of variables has equal value if yes log "equal" if not log "not equal"
// check if at least one of three variables has value true, if yes log "at least one has it"

let firstBoolean = true;
let secondBoolean = true;
let thirdBoolean = false;

firstBoolean == secondBoolean && firstBoolean == thirdBoolean
  ? null
  : console.log("nope, not equal");

firstBoolean == true || secondBoolean == true || thirdBoolean == true
  ? console.log("at least one has true")
  : null;

/* ********************* */
// check if num1 greater on equal to num2 if true, console log sum of both numbers

let num1 = 587;
let num2 = 587;

num1 >= num2 ? console.log(num1 + num2) : null;

/* ********************* */
// check if sum of a and b is less then sum of c and d
// if yes log "(a and be sum) is less than (c and d sum)"
// if no, check if each of the variables is more than 10 in one expression - if each of them is more than 10 - log the answer to the console

let a = 36;
let b = 54;
let c = 11;
let d = 44;

a + b < c + d
  ? console.log(`${a + b} is less thant ${c + d}`)
  : a > 10 && b > 10 && c > 10 && d > 10
  ? console.log("each of them are more than 10")
  : null;

/* ********************* */

let item1 = 1;
let item2 = 8;
let item3 = 11;

// check if at least one of items is greater than 10 with OR operator ( || )
// if yes, create new variable and make his value to be sum of all item variables
// check if new variable value is equal or higher than 20
// if yes log "new variable value is (NEW VARIABLE VALUE)"

/* ********************* */

// SWITCH
let language = "lithuanian";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

/* ********************* */
const weekDay = 5;
switch (weekDay) {
  case 1:
    console.log("It is Monday");
    break;
  case 2:
    console.log("It is Tuesday");
    break;
  case 3:
    console.log("It is Wednesday");
    break;
  case 4:
    console.log("It is Thursday");
    break;
  case 5: // this one will match
    console.log("time to beer");
    break;
  case 6:
  case 7:
    console.log("restday");
    break;
}

const dayOfWeek = 39;
switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Workday");
    break;
  case 5: // this one will match
    console.log("time to beer");
    break;
  case 6:
  case 7:
    console.log("restday");
    break;
  default:
    console.log("doesn't work that way");
    break;
}

/* ********************* */

// Bilieto kaina - 10eur;

// Nuolaidos:
// - iki 6 metu: nuolaida 80%;
// - nuo 7 iki 18: nuolaida 60%;
// - nuo 19 iki 24: nuolaida 20%;
// - nuo 25 iki 64: nuolaida 0%;
// - nuo 65: nuolaida 85%;

// apskaičiuojama bilieto kaina.

// const ticketPrice = (age, standardPrice) => {
//   let price;

//   if (age <= 6) {
//     price = standardPrice * 0.2;
//   } else if (age > 6 && age <= 18) {
//     price = standardPrice * 0.4;
//   } else if (age > 18 && age <= 24) {
//     price = standardPrice * 0.8;
//   } else if (age > 25 && age <= 64) {
//     price = standardPrice;
//   } else if (age >= 65) {
//     price = standardPrice * 0.15;
//   }
//   return price;
// };

let price = 10;
let personsAge = Number(prompt("enter your age"));
let discountedPrice = 0;
let discount;

switch (true) {
  case personsAge <= 6:
    discountedPrice = price - (price * 80) / 100;
    discount = "80%";
    break;
  case personsAge > 6 && personsAge <= 18:
    discountedPrice = price - (price * 60) / 100;
    discount = "60%";
    break;
  case personsAge > 18 && personsAge <= 24:
    discountedPrice = price - (price * 20) / 100;
    discount = "20%";
    break;
  case personsAge >= 65:
    // discountedPrice = price * 0.15;
    discountedPrice = price - (price * 85) / 100;
    discount = "85%";
    break;
  default:
    discountedPrice = price;
    discount = "no discount";
    break;
}

console.log(
  `For the age of ${personsAge} total price will be ${discountedPrice} Eur. ${
    discount != "no discount" ? "with the discount of " + discount : null
  }`
);
