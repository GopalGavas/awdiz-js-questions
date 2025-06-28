// 1. Print all even numbers from 1 to 50 using a for loop and if condition.
for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// 2. Using a while loop, print numbers from 10 to 1 in reverse order.
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// 3. Write a program that prints the multiplication table of a number (e.g., 7) using a for loop.
console.log("------ Table of 7 -------");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} == ${7 * i}`);
}

// 4. Using a for loop, print only the odd numbers from 1 to 100.
for (let index = 1; index <= 100; index++) {
  if (index % 2 === 1) {
    console.log(index);
  }
}

// 5. Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if.
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}

// 6. Print the factorial of a number using a while loop.
let num = 5;
let fact = 1;
while (num > 0) {
  fact = fact * num;
  num--;
}
console.log(fact);

// 7. Use a for loop to find the sum of all numbers from 1 to 100.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum);

/*
8. Write a program using a loop and switch to print:
○ "Fizz" if the number is divisible by 3
○ "Buzz" if divisible by 5
○ "FizzBuzz" if divisible by both
○ Else print the number
(From 1 to 50)
*/
for (let index = 1; index <= 50; index++) {
  switch (true) {
    case index % 3 == 0 && index % 5 == 0:
      console.log("FizzBuzz");
      break;
    case index % 3 == 0:
      console.log("Fizz");
      break;
    case index % 5 == 0:
      console.log("Buzz");
      break;
    default:
      console.log(index);
      break;
  }
}

// 9. Print the first 10 Fibonacci numbers using a while loop.
let first = 0;
let second = 1;
let count = 1;

while (count <= 10) {
  console.log(first);
  third = first + second;
  first = second;
  second = third;
  count++;
}

/*
10. Using a for loop, print the square of numbers from 1 to 10 and categorize them using
if:
● Less than 20: “Small”
● Between 20–50: “Medium”
● More than 50: “Large”
*/

for (let index = 1; index <= 10; index++) {
  let square = index * index;
  if (square < 20) {
    console.log("Small");
  } else if (square >= 20 && square <= 50) {
    console.log("Medium");
  } else {
    console.log("Large");
  }
}
