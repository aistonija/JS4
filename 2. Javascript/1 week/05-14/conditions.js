/* ********************************* */
// 1. prompt asking for name, without default value
// 2. check if it was not empty.
// if true - log to the console - "Hi, name entered", otherwise do not log anything.

// priskiriu kintamajam fName ivesta reiksme
// let fName = prompt("Iveskite varda");
// console.log(fName);
let fName = "Modestas";
// tikrinu ar laukelis nera tuscias
// if (fName != "") {
//   console.log(`Hi, ${fName}`);
// }

//
fName != "" ? console.log(`Hi, ${fName}`) : null;

/* ********************************* */

// check if name is wrong,
// if yes change name to 'Dzionis', if no log name
// use ternary ? operator

let firstName = "Jonas";
let wrongName = true;

// wrongName ? (firstName = "Dzionis") : console.log(firstName);

wrongName
  ? ((firstName = "Kukumba"), console.log(firstName))
  : console.log(firstName);

let newName;
wrongName ? (newName = "Kukumba") : (newName = firstName);
console.log(newName);

// console.log(firstName);

//

/* ********************************* */

// check if date one is bigger than date two
// if yes log date one
// if not subtract date one from date two and log the answer

let dateOne = 1991;
let dateTwo = 2020;
let subtractResult;

// simple if
if (dateOne > dateTwo) {
  console.log(dateOne);
} else {
  console.log(dateTwo - dateOne);
}

if (/* salyga, kuria mum reikia patikrinti */ 1) {
  /* patenkinus salyga - ivykdomas kodo blokas */
} else {
  /* visais kitais atvejais vykdomas kodas */
}

// ternary 1
dateOne > dateTwo ? console.log(dateOne) : console.log(dateTwo - dateOne);

// ternary 2
let dates = dateOne > dateTwo ? dateOne : dateTwo - dateOne;
console.log(dates);

/* *************************************** */
// check if sum of a and b is less then sum of c and d
// if yes log "(a and be sum) is less than (c and d sum)"
// if no, check if each of the variables is more than 10 in one expression - if each of them is more than 10 - log the answer to the console

let a = 36;
let b = 54;
let c = 11;
let d = 44;

if (a + b < c + d) {
  console.log(`${a + b} is less than ${c + d}`);
} else if (a > 10 && b > 10 && c > 10 && d > 10) {
  console.log("all values are greater than 10");
}

a + b < c + d
  ? console.log(`${a + b} is less than ${c + d}`)
  : a > 10 && b > 10 && c > 10 && d > 10
  ? console.log("all values are greater than 10")
  : null;

/* *************************************** */
// SWITCH

a + b < c + d
  ? alert(a + b + " is less than " + c + d)
  : a > 10 && b > 10 && c > 10 && d > 10
  ? alert("sdf")
  : null;
