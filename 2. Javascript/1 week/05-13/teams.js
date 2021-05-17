const teams = [
  {
    teamName: "Alpha",
    teamMembers: ["Aristidas", "Edgaras", "Juozas", "Laurynas"],
  },
  {
    teamName: "Beta",
    teamMembers: ["Deividas", "Modestas", "Paulius", "Vytautas B"],
  },
  {
    teamName: "Gammma",
    teamMembers: ["Laima", "Augustinas", "Kostas", "Rimvydas"],
  },
  {
    teamName: "Omega",
    teamMembers: ["Šarūnas", "Darius", "Martynas", "Tomas"],
  },
  {
    teamName: "Epsilon",
    teamMembers: ["Yvijus", "Justas", "Lukas", "Vytautas K"],
  },
];

console.log(teams);

// Petro
2 === 2; // true
2 == "2"; // true
2 !== 2; // false
5 < 5; // false
5 >= 4; // true
true !== false; // true
9 - 5 === 4; // true
5 * 5 !== "25"; // true
true && true; // true
2 === 5 && true; // false
6 * 6 === 36 && 15 - 9 == "6"; // true
//36 === 36 && 6 == "6"
false || false; // false
10 === 10 || 5 == 2; // true
(2 * 2) / 2 == "1" || 5 * 5 === 25; // true
// false || true
14 * 2 !== "28" || "Jonas" == "Jonas"; // true
// true || true
10 && 15 > 10; // true
let what = "Petras" && 0; // false, how come 0?

what = ("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13); // true, how come 110?
// (true || true) && (110 || false)

what = "jonas" === "Jonas"; // false
what = "Petras" + 5 === "Petras" + "5"; // true
what = "Jonas" + 5 + 5 === "Jonas10"; // false
what = 5 + 10 + "Antanas" === "15Antanas"; // true
what = 2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"; // false
what = 10 % 1 === 1; // false
what = 5 * "5" === 25; // true
console.log(what);

let car = "Audi";

if (car === "VW" || car === "Audi" || car === "Opel") {
  console.log("VW Group");
} else if (car === "BMW" || car === "Mini" || car === "Opel") {
  console.log("BMW Group");
} else {
  console.log("Liampine masina");
}
