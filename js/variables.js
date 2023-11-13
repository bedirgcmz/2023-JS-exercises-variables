// Exercise 1 - initialise these variables

const FUTURE_YEAR = 2045; // don't change this
let firstName;
let birthYear;

// write your code here :
firstName = "Bedir";
birthYear = 1989;

// Work out your age in 2045.
let futureAge;
// write your code here :
futureAge = FUTURE_YEAR - birthYear;

// Exercise 2 - initalise these variables to show their type

let firstNameType;
let birthYearType;
let futureAgeType;
let firstNameBirthYear = firstName + birthYear;
let firstNameBirthYearType;

// write your code here :
firstNameType = typeof firstName;
birthYearType = typeof birthYear;
futureAgeType = typeof futureAge;
firstNameBirthYearType = typeof firstNameBirthYear;
console.log("firstNameType:", firstNameType);
console.log("birthYearType:", birthYearType);
console.log("futureAgeType:", futureAgeType);
console.log("firstNameBirthYearType:", firstNameBirthYearType);

// Exercise 3

let numbersFirst;
let stringFirst;

// write your code here :

numbersFirst = birthYear + FUTURE_YEAR + firstName;
stringFirst = firstName + birthYear + FUTURE_YEAR;

// Exercise 4 - you'll need to add a const and initialise these variables
// From now on add the initialisation on the same line as the declaration of variables
const coffeInOneDayNumber = 3;

let fiveDays = 5 * coffeInOneDayNumber;
let thirtyDays = 30 * coffeInOneDayNumber;
let oneYear = 365 * coffeInOneDayNumber;
let fiveYears = 5 * oneYear;

// Exercise 5 - you'll need another const
const coffeCost = 45;

let fiveDaysCost = 5 * coffeInOneDayNumber * coffeCost;
let thirtyDaysCost = 30 * coffeInOneDayNumber * coffeCost;
let oneYearCost = 365 * coffeInOneDayNumber * coffeCost;
let fiveYearCost = 5 * 365 * coffeInOneDayNumber * coffeCost;

// Exercise 6 - you'll need another CONST
const coffeCostNow = 45;
const coffeCostAfterTwoYears = 52;
const coffeCostAfterFourYears = 59;

const firstAndSecondYearCost = 365 * 2 * 3 * coffeCostNow;
const thirdAndFourthYearCost = 365 * 2 * 3 * coffeCostAfterTwoYears;
const fifthYearCost = 365 * 3 * coffeCostAfterFourYears;

let fiveYearCostInflation =
  firstAndSecondYearCost + thirdAndFourthYearCost + fifthYearCost;

// Excercise 7
/* 
Remember "textContent" from the lecture?
Edit the html file to add what you need, then write JS below to target that element 
*/

// write your code here :
const exerciseSeven = document.getElementById("exercise-7");
const howManyCoffe = (2045 - 2023) * 365 * 3;

exerciseSeven.textContent =
  "I will drink coffees by today's date in 2045: " + howManyCoffe;

// Exercise 8
/* 
No help on this one. Write the html element you need in the html file and the JS to target it 
*/

// write your code here :
const totalCost = document.getElementById("total-cost");
const howMuchCostTwoYear = 2 * 365 * 3 * 45;
const howMuchCostThreeYear = 3 * 365 * 3 * 52;
const myTotalCost = howMuchCostTwoYear + howMuchCostThreeYear;

totalCost.textContent = "after 5 years, I pay for tha coffe: " + myTotalCost;

/* *********************************************************************************** */
/* DO NOT TOUCH ANYTHING BELOW HERE */
/* *********************************************************************************** */

// Excercise 1
document.querySelector("h1").textContent = "Variables by " + firstName;
document.getElementById("first-name").textContent = firstName;
document.getElementById("birth-year").textContent = birthYear;
document.getElementById("future-age").textContent = futureAge;

// Exercise 2
document.getElementById("first-name-type").textContent = firstNameType;
document.getElementById("birth-year-type").textContent = birthYearType;
document.getElementById("future-age-type").textContent = futureAgeType;
document.getElementById("name-birth-year-type").textContent =
  firstNameBirthYearType;

// Exercise 3
document.getElementById("numbers-first").textContent = numbersFirst;
document.getElementById("string-first").textContent = stringFirst;

// Exercise 4
document.getElementById("five-days").textContent = fiveDays;
document.getElementById("thirty-days").textContent = thirtyDays;
document.getElementById("one-year").textContent = oneYear;
document.getElementById("five-years").textContent = fiveYears;

// Exercise 5
document.getElementById("five-days-cost").textContent = fiveDaysCost;
document.getElementById("thirty-days-cost").textContent = thirtyDaysCost;
document.getElementById("one-year-cost").textContent = oneYearCost;
document.getElementById("five-year-cost").textContent = fiveYearCost;

// Exercise 6
document.getElementById("five-year-cost-inflation").textContent =
  fiveYearCostInflation;
