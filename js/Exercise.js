//Exercise 1
const age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
    console.log("You are old enough to drive");
} else {
    const yearsLeft = 18 - age;
    console.log(`Please wait ${yearsLeft} more years to be old enough to drive.`);
} 

// Exercise 2
let myAge = 21
const yourAge = parseInt(prompt("Enter your age:")); 
if (yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me.`);
}else if (yourAge < myAge) {
    console.log(`I am ${myAge - yourAge} years older than you`);
  } else {
    console.log("We are the same age.");
  }

// Exercise 3 (If else)
  let a = 4
  let b = 3

  if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("a is less than b");
  }

// Ternary Operation 
let c = 10;
let d = 5;
console.log(c > d ? "c is greater than d" : "c is less than d");

// Exercise 4
let month = prompt("Enter the month:").toLowerCase();
if (month === "september" || month === "october" || month === "november") {
  console.log("The season is Autumn.");
} else if (month === "december" || month === "january" || month === "february") {
  console.log("The season is Winter.");
} else if (month === "march" || month === "april" || month === "may") {
  console.log("The season is Spring.");
} else if (month === "june" || month === "july" || month === "august") {
  console.log("The season is Summer.");
} else {
  console.log("Invalid month");
}

// Exercise 5 
let score = parseInt(prompt("Enter the student's score:")); 
if (score >= 80 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 70 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: C");
} else if (score >= 50 && score <= 59) {
  console.log("Grade: D");
} else if (score >= 0 && score <= 49) {
  console.log("Grade: F");
} else {
  console.log("Invalid score");
}
