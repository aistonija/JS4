/* RECAP IF */

//------------
// BILL AND TIP CALCULATOR
//------------

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20 %.

// Your tasks: 1. Calculatethe tip, depending on the bill value.
// Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!);

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// §Data 1: Test for bill values 275, 40 and 430
// Hints: §To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
// §Value X is between 50 and 300, if it's >= 50 && <= 300😉

// const bill = 40;

// const tips = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill} monies, the tip was ${tips} monies, and the total value was ${
//     bill + tips
//   } monies`
// );

//------------
// CIKLAI
//------------

// write loop that iterates from 0 to 20 and does console.log()
// if iteration value is even number

for (let x = 0; x <= 20; x++) {
  if (x % 2 === 0) {
    console.log(`Cycle is even`, x);
  }
}

// ivykdo kas antra cikla
for (let y = 0; y <= 20; y += 2) {
  console.log(`I am cycle No:`, y);
}

// ivykdo visus 20 ciklu
for (let i = 0; i <= 20; i++) {
  console.log(i++);
}

//------------
// CIKLAI
//------------

let array = [1, 5, 15, 0.3, -9, -63, 25898412, 15];

for (let i = 0; i < array.length; i++) {
  console.log(`Array cycle number: ${i} and actual value: ${array[i]}`);
}

// loops over all items in array and console logs each of them

let arrayOfStrings = ["Labas", "vakaras", "ponios", "ir", "ponai"];

for (let x = 0; x < arrayOfStrings.length; x++) {
  console.log(arrayOfStrings[x]);
}

////----------------

for (let a = 0; a < 10; a++) {}

// while ciklas
let a = 0;

while (a < 10) {
  console.log(a);
  a++;
}

// naudojant while cikla, konsoleje isspausdinti tik lyginius ciklus nuo 0 iki 20

// go through array with for loop and flip booleans to opposite value

let arrayOfBooleans = [true, false, false, true, true, true, false];

console.log(arrayOfBooleans);

for (let x = 0; x < arrayOfBooleans.length; x++) {
  arrayOfBooleans[x] = !arrayOfBooleans[x];
}

console.log(arrayOfBooleans);
