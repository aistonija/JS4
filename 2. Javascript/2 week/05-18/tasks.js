/* VARIABLES AND DATA TYPES
1. Declare variables called:
- country
- continent
- population

and assign their values according to your favorite country (population in millions i.e. 2.5);

log their values in the console
*/

const country = "Lithuania";
const continent = "Europe";
let population = 2.7;

// console.log(country);
// console.log(continent);
// console.log(population);

/* BOOLEAN DATA TYPE
2. Declare a variable called isIsland. And set its value according to your country. The variable should hold a Boolean value.
 */

const isIsland = false;

/*
3. Declare a variable 'language', but don't assign it any value yet. 
Log the types (with typeof) of 'isIsland', 'population', 'country' and 'language'to the console
*/

let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//-----------------------------------------------------//

// LET AND CONST

// 4.1. Set the value of 'language' to the language spoken in your chosen country (some countries have multiple languages, but just choose one)

language = "lithuanian";

// 4.2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// 4.3. Try to change one of the changed variables now, and observe what happens.

// isIsland = true;

//-----------------------------------------------------//

// increment (++)

// population = population + 1;
// console.log(population);

// population += 1;
// console.log(population);

// population++;
// console.log(population);

// language = "wuf wuf";
// console.log(language);

// OPERATORS

// 5.1. If your chosen country split in half, how many people would live in each half?

let halfPopulation = population / 2;

// 5.2. Increase the population of your country by 1 and log the result to the console

// population = population + 1;
// console.log(population++);

// 5.3. Finland has a population of 6 million. Does your country have more people than Finland?

let populationFinland = 6;
let isMorePeople = population > 6;
// console.log("is More People:", isMorePeople);

// 5.4. The average population of a country is 33 million people. Does your country have less people than the average country?

let avgPopulation = 33;
let myPopulation = population < avgPopulation;
// console.log(myPopulation);

// 5.5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description);

//-----------------------------------------------------//

/* TYPE CONVERSION
6.1. Predict the result of these 5 operations without executing them:
'9' -'5';
'19' -'13' + '17';
'19' -'13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;

6.2. Execute the operations to check if you were right
*/

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < "57");
console.log(5 + 6 + "4" + 9 - 4 - 2);

//-----------------------------------------------------//

// alert("Jus esate cool!");
// let answer = prompt("Kaip siandien jauciates?", "ne tavo reikalas");
// console.log(answer);

/* IF ELSE STATEMENTS
7.1. If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'.
*/

//7.2 Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} below average`);
}

//7.3. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

//-----------------------------------------------------//

/* EQUALITY OPERATORS
8.1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');
*/

const numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);

// 8.2. If there is only 1 neighbour, log to the console 'Only 1 border!'(use loose equality == for now)

if (numNeighbours == 1) {
  console.log("Only 1 border!");
}

// 8.3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1.

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
}

// 8.4. Use an else block to log 'No borders' (this block will be executed when 'numNeighbours'is 0 or any other value)

if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}

// 8.5.Test the code with different values of 'numNeighbours', including 1 and 0.

// 8.6. Change == to ===, and test the code again, with the same values of 'numNeighbours'. Notice what happens when there is exactly 1 border! Why is this happening?

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}

// 8.7. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1

// 8.8. Reflect on why we should use the === operator and type conversion in this situation

if (country === "Japan" && continent === "Europe") {
  console.log("You cool");
} else if (country === "Lithuania" && continent === "Europe") {
  console.log("You COOL LITHUANIAN");
} else if (country === "Australia" || continent === "Europe") {
  console.log("You cool in General");
}

//-----------------------------------------------------//

/*  Logical Operators
9.1. Comment out the previous code so the prompt doesn't get in the way

9.2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.
*/

//9.3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

//9.4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('

//9.5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true

if (language === "english" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria 😥`);
}
