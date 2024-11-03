/* //if else
let isRaining = true;

if (isRaining) {
  console.log("You need a rain coat");
} else {
  console.log("You dont need a rain coat");
}

//if else if else
let weather = "cloudy";

if (weather === "raining") {
  console.log("U need a rain coat");
} else if (weather === "cloudy") {
  console.log("Is might be cold, u need a coat");
} else if (weather === "sunny") {
  console.log("Go out freely");
} else {
  console.log("U dont need a rain coat");
}
*/

//switch
let dayUserInput = prompt("What day is today?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Day selected is not correct");
}


//Ejemplo
let num = prompt("Enter number");
switch (true) {
  case num > 0:
    console.log("That number is positive");
    break;
  case num < 0:
    console.log("That number is negative");
    break;
  case num == 0:
    console.log("That number is a zero");
    break;
  default:
    console.log("It was not a number");
    break;
}
