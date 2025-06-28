//1. Write a program to check if a number is positive, negative, or zero using if-else.
let number = 1;
if (number == 0) {
  console.log("number is zero");
} else if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative");
}

//2.  Check whether a number is even or odd using if-else.
let num = 0;
if (num % 2 == 0) {
  console.log("number is even");
} else if (num % 2 == 1) {
  console.log("number is odd");
}

/*
3. Write a program that accepts age as input and prints:
○ "Child" if age < 13
○ "Teenager" if 13 ≤ age < 20
○ "Adult" if 20 ≤ age < 60
○ "Senior" if age ≥ 60
*/
let age = 22;
if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

/*
4. Create a program to print the grade of a student using if-else based on marks:
○ 90+ => A
○ 80–89 => B
○ 70–79 => C
○ 60–69 => D
○ below 60 => F
*/
let marks = 95;
let Grade;
if (marks >= 90) {
  Grade = "A";
} else if (marks >= 80 && marks < 90) {
  Grade = "B";
} else if (marks >= 70 && marks < 80) {
  Grade = "C";
} else if (marks >= 60 && marks < 70) {
  Grade = "D";
} else if (marks < 60) {
  Grade = "F";
}
console.log(Grade);

//5. Use a switch case to take a number between 1–7 and print the corresponding weekday.
let numWeek = 6;
switch (numWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Not a valid weekday");
    break;
}

/*
6.Create a program using switch that takes a character input and prints whether it is a vowel (a, e, i, o, u) or consonant.
*/
let character = "A";
switch (character.toUpperCase()) {
  case "A":
    console.log("It is a vowel");
    break;
  case "E":
    console.log("It is a vowel");
    break;
  case "I":
    console.log("It is a vowel");
    break;
  case "O":
    console.log("It is a vowel");
    break;
  case "U":
    console.log("It is a vowel");
    break;
  default:
    console.log("It is a consonant");
    break;
}

// 7. Use if-else to check if a year is a leap year or not.
let year = 2012;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// 8. Use switch-case to perform basic arithmetic operations (+, -, *, /) based on the operator input.
let operator = "+";
let num1 = 10;
let num2 = 15;
let ans;
switch (operator) {
  case "+":
    ans = num1 + num2;
    break;
  case "-":
    ans = num1 - num2;
    break;
  case "*":
    ans = num1 * num2;
    break;
  case "/":
    ans = num1 / num2;
    break;
  default:
    console.log("Enter a valid operator");
    break;
}
console.log(ans);

// 9. Write a program using if-else to check if a person is eligible to vote (age ≥ 18).
let agetoVote = 21;
if (agetoVote >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// 10. Using if-else, check if three given sides can form a triangle or not.
let a = 5;
let b = 6;
let c = 7;
if (a + b > c && b + c > a && c + a > b) {
  console.log("The sides can form a triangle.");
} else {
  console.log("The sides cannot form a triangle.");
}
