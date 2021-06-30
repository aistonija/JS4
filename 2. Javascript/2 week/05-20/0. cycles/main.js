/* 1 */
// parašyti for ciklą, kuris suksis 30 kartų.
// nuo 20 ciklo konsolėje atspausdinti: dabar sukasi x ciklas. x = ciklo skaičius

// for (let x = 0; x < 30; x++) {
//   if (x >= 20) {
//     console.log(`Dabar sukasi ${x} ciklas`);
//   }
// }

/* 2 */
// turime masyvą su reikšmėmis
// parašyti for ciklą, kuris suksis per masyvo elementus. Naudojant if sąlygą patikrinti ar kurio nors ciklo metu atrandama reikšmė yra "black mamba". Jei atrandama - tada konsolėje parašyti, kuriuo indeksu ji yra (kelintas elementas), ir kad ji yra nuodingiausia gyvatė pasaulyje, pvz.: black mamba yra 4 elementas masyve, ir ji yra nuodingiausia gyvatė pasaulyje.
// kodo hardcodinti negalima.

let getIndex = ["first", "second", "third", "black mamba", "fourth", "fifth"];

for (let x = 0; x < getIndex.length; x++) {
  if (getIndex[x] === "black mamba") {
    console.log(
      `${getIndex[x]} yra ${x} elementas masyve, ir ji yra nuodingiausia gyvatė pasaulyje`
    );
  }
}

/* 3. */
// parašyti funkciją, kuriai galima paduoti du parametrus. Vienas iš jų masyvas, o kitas bet koks skaičius, jis bus daugintojas (multiplier)
// funkcija turi sukti ciklą per paduotą masyvą, nepriklausomai nuo masyve esančių elementų kiekio.
// sukantis ciklui, kiekvienas masyvo skaičius padauginamas iš daugintojo (multiplier).
// Kviečiant funciją į argumentus paduodamas masyvas ir skaičius, pvz. multiplyMe(array, 5). Ciklas sukdamas kiekvieną masyvo elementą padaugins iš 5.
// Funkcija nieko negrąžina, tiesiog console.log kiekvieną padauginą skaičių.

let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function multiply(numArr, multiplier) {
  for (let x = 0; x < numArr.length; x++) {
    console.log(numArr[x] * multiplier);
  }
}

multiply(arrayOfNumbers, 5);
multiply([2, 5, 2, 10, 2], 10);

/* 4. */
// turime masyvą su skaičiais
let numbers = [1.1, 5.3, 6.68, 3, 2.5, 10.1];
// parašyti dvi funkcijas, jos abi suks ciklą per masyvą paduotą į argumentus.
// Viena visus skaičius apvalins aukštyn(Math.ceil), o kita žemyn(Math.floor).
// Funkcija konsoleje atvaizduos kiekvieną masyvo elementą naujoje eilutėje.

// function floored(array) {
//   for (let x = 0; x < array.length; x++) {
//     console.log(Math.floor(array[x]));
//   }
// }

// floored(numbers);

// function ceiled(array) {
//   for (let x = 0; x < array.length; x++) {
//     console.log(Math.ceil(array[x]));
//   }
// }

// ceiled(numbers);

/* 5. */
// Turime string'ą
// let string = "Labas rytas suraitytas, kaip šiandien nuotaikėlė?   ";
// Prasukti ciklą pro šitą stringą, naudojant .length savybę, kaip ir su masyvu.
// Suskaičiuoti, kiek sakinyje yra tarpų?

// let spaces = 0;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] === " ") {
//     spaces++;
//   }
// }

// console.log(spaces);

/* 6. */
// Parašykite funkciją, kuri prie žodžio BURP pridės tiek R raidžių, kokį parametrą paduosite.
// console.log funkcijoje
// pvz burp(3) -> BURRRP

// function burp(number) {
//   let r = "";
//   for (let x = 0; x < number; x++) {
//     r += "R";
//   }

//   console.log(`BU${r}P`);
// }

// burp(3);
// burp(5);
// burp(9);

/* 7. */
// Parašykite funkcijos išraišką, kuriai padavus masyvą, ji prasuks ciklą pro jos elementus, ir apskaičiuos visų elementų sumą ir ją grąžins.

const getSumOfItems = function (array) {
  let sum = 0;
  for (let x = 0; x < array.length; x++) {
    sum += array[x];
  }
  return sum;
};

console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));

/*  */
/*  */
/*  */
/*  */
/*  */
