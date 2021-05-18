// "use strict";

// function

// kintamojo deklaracija
const fName = "Aiste";

// funkcijos deklaracija
// funkcija be parametru
function logger() {
  const fName = "Rytis";
  console.log("Labas rytas, " + fName);
}

logger();

const a = "Labas";

nameLogger("Aristidas");
nameLogger("Paulius");
nameLogger("Laima");
nameLogger("Martynas");
nameLogger("Laurynas");
nameLogger("Kostas");
nameLogger(fName);

// funkcija, kuri suks cikla nuo min iki max
function cycleSpinner(min, max) {
  for (let i = min; i <= max; i++) {
    console.log(i);
  }
}

// cycleSpinner(2, 5);
// cycleSpinner(0, 15);

// funkcija kuri grazina kazkoki rezultata
function sum(num1, num2) {
  return num1 + num2;
}

let sumUp = sum(1, 2);

// funkcija su parametrais
function nameLogger(a) {
  console.log(`Labas rytas, ${a}`);
}

// tasks

// 1.
// parasyti funkcija, kuri i parametrus paims du argumentus, ir grazins sakini.
// fruitProcessor, paduoti du vaisius
// grazina toki sakini: 'juice is made of apples and mango'
// funkcijos rezultata priskirti kintamajam ir ji atvaizduoti konsoleje

function fruitProcessor(fruit1, fruit2) {
  return `Juice made of ${fruit1} and ${fruit2}`;
}

const deliciousJuice = fruitProcessor("kiwi", "banana");
console.log(deliciousJuice);

// 2.
// parasyti funkcija, kuri priims 2 parametrus, ir palygins ar tie parametrai yra lygus ir vienodi.
// turi grazinti rezultata

// pasibandyti su 3 skirtingais pavyzdziais,
// 2, 2 -> tiesa
// 2, "2" -> netiesa
// 8, 21 -> netiesa

function isSame(num1, num2) {
  return num1 === num2;
}

console.log((sk = isSame(5, 15)));

console.log(sk);

// 3.

// parasyti funkcija, kuriai i parametrus padavus masyva, ir ja iskvietus, ciklo pagalba butu konsoleje atvaizduojami masyvo elementai.

let strings = ["Labas", "vakaras", "ponios", "ir", "ponai"];
let array = [1, 5, 15, 0.3, -9, -63, 25898412, 15];

function printOutArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printOutArray(strings);
printOutArray(array);
printOutArray([1, 5, 15, "bananas"]);

// task 4
// parasyti funkcija, kuriai padavus gimimo metus ir dabartinius metus bus apskaiciuojami metai like iki pensijos (tebunie - pensija prasides 65)

function yearsUntilRetirement(birthYear, anyYear) {
  const age = 65 - (anyYear - birthYear);
  return age > 0 ? age : "person is already retired";
}

let yearsUntil = yearsUntilRetirement(1992, 2021);

// function yearsUntilRetirement(birthYear, anyYear) {
//   const age = 65 - (anyYear - birthYear);

//   if (age > 0) {
//     return age;
//   } else {
//     return 'retired';
//   }
// }

// function yearsUntilRetirement(birthYear, anyYear) {
//   const age = 65 - (anyYear - birthYear);
//   let result = "";

//   if (age > 0) {
//     result = age;
//   } else {
//     result = "retired";
//   }
//   return result;
// }

// console.log(yearsUntilRetirement(1940, 2021));

// FUNCTION EXPRESSION

let yrsUntil = function (birthYear, anyYear) {
  const age = 65 - (anyYear - birthYear);
  return age > 0 ? age : "person is already retired";
};

let comp = (num1, num2) => {
  const age = 65 - (num1 - num2);
  return age > 0 ? age : "person is already retired";
};

console.log(yrsUntil(1998, 2022));
console.log(yrsUntil(1930, 2022));

// ARROW FUNCTION

// function declaration
function sum(num1, num2) {
  return num1 <= num2;
}

// let sumUp = sum(1, 2);

// arrow function

let comparison = (num1, num2) => num1 + num2;
console.log(comparison(2, 2));

let greeting = () => console.log("sveiki gyvi");
greeting();

let greet = (fName) => console.log(`labas, ${fName}`);

greet(fName);

// parasyti arrow funkcija, pagal fruitProcessor funkcija

let juicy = (fruit, fruit2) => `Juice made of ${fruit} and ${fruit2}`;

console.log(juicy("beetroot", "carrot"));

// palyginimo operatoriai
// <=
// >=

// arrow function
// =>
