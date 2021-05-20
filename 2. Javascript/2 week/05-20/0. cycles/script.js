/* 1. */
// parašyti for ciklą, kuris suksis 30 kartų.
// nuo 20 ciklo konsolėje atspausdinti: dabar sukasi x ciklas. x = ciklo skaičius

for (let x = 0; x < 30; x++) {
  if (x >= 20) {
    console.log(`Dabar sukasi ${x} ciklas`);
  }
}

/* 2. */
// Turime string'ą
let string = "Labas rytas suraitytas, kaip šiandien nuotaikėlė?";
let string1 = "Labas rytas suraitytas";
// Prasukti ciklą pro šitą stringą, naudojant .length savybę, kaip ir su masyvu.
// Suskaičiuoti, kiek sakinyje yra tarpų?

let spaces = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    spaces++;
  }
}

console.log(spaces);

/* 3. */
// Parašykite funkciją, kuri prie žodžio BURP pridės tiek R raidžių, kokį parametrą paduosite.
// console.log funkcijoje
// pvz burp(3) -> BURRRP

function burp(number) {
  let r = "";
  for (let x = 0; x < number; x++) {
    r += "R";
  }

  console.log(`BU${r}P`);
}

burp(3); // BURRRP
burp(5); // BURRRRRP
burp(9); // BURRRRRRRRRP

/* 4. */
// turime masyvą su skaičiais
let numbers = [1.1, 5.3, 6.68, 3, 2.5, 10.1];
// parašyti dvi funkcijas, jos abi suks ciklą per masyvą paduotą į argumentus.
// Viena visus skaičius apvalins aukštyn(Math.ceil()), o kita žemyn(Math.floor()).
// Funkcija konsoleje atvaizduos kiekvieną masyvo elementą naujoje eilutėje.

function floored(array) {
  for (let x = 0; x < array.length; x++) {
    console.log(Math.floor(array[x]));
  }
}

// 1.1 => 1
// 5.3 => 5
// 6.68 => 6

console.log("-- -- -- Math floor -- -- --");
floored(numbers);

function ceiled(array) {
  for (let x = 0; x < array.length; x++) {
    console.log(Math.ceil(array[x]));
  }
}

// 1.1 => 2
// 5.3 => 6
// 6.68 => 7
console.log("-- -- -- Math ceil -- -- --");
ceiled(numbers);
