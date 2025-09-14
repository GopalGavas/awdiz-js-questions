// Write a function to reverse a string without using built-in reverse().
const reverseString = (string) => {
  let arrStr = string.split("");
  let first = 0;
  let last = arrStr.length - 1;

  while (first < last) {
    let temp = arrStr[first];
    arrStr[first] = arrStr[last];
    arrStr[last] = temp;
    first++;
    last--;
  }

  return arrStr.join("");
};

// console.log(reverseString("hello"));

// Write a function to check if a given number is prime or not.
const checkPrime = (number) => {
  let isPrime = true;
  if (number === 0 || number === 1) {
    return (isPrime = false);
  }

  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index == 0) {
      isPrime = false;
    }
  }

  return isPrime;
};

// console.log(checkPrime(7));
// console.log(checkPrime(2)); // true
// console.log(checkPrime(9)); // false
// console.log(checkPrime(17)); // true
// console.log(checkPrime(1)); // false
// console.log(checkPrime(15)); // false

// Write a function to check if a given string is a palindrome.
const checkPalindrome = (string) => {
  let isPalindrome = false;
  let stringReverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
  }

  if (stringReverse === string) {
    isPalindrome = true;
  }

  return isPalindrome;
};

// console.log(checkPalindrome("madam")); // true
// console.log(checkPalindrome("racecar")); // true
// console.log(checkPalindrome("hello")); // false
// console.log(checkPalindrome("12321")); // true
// console.log(checkPalindrome("12345")); // false

// Find the largest number in an array.
const findLargestNum = (array) => {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }

  return largest;
};

// console.log(findLargestNum([3, 19, 32, 56, 24, 48]));

// Write a function to count vowels in a string.
const countVowels = (string) => {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    let char = string[index].toUpperCase();
    if ("AEIOU".includes(char)) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("javascript"));

// Write a function to factorial of a number using recursion.
const factorial = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// console.log(factorial(5));

// Write a program to swap two variables without using a third variable.
let swapNum = (a, b) => {
  [a, b] = [b, a];

  return [a, b];
};
// console.log(swapNum(10, 6));

// Write a function to remove duplicates from an array.
const removeDuplicates = (array) => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!arr.includes(array[i])) {
      arr.push(array[i]);
    }
  }
  return arr;
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 8]));

// Write a program to flatten a nested array (e.g. [1, [2, [3]]] → [1, 2, 3]).
let flattenArray = (array) => {
  return array.flat(Infinity);
};
// console.log(flattenArray([1, [2, [3]]]));

// Write a function to sort an array of numbers without using .sort().
let sortArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

// console.log(sortArray([94, 29, 13, 45, 66]));

// Write a function that returns the second largest number in an array.
let secondLargestNum = (array) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] !== largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }

  return secondLargest;
};

// console.log(secondLargestNum([3, 19, 32, 56, 24, 48]));

// Write a program to find the frequency of each character in a string.
let frequency = (string) => {
  let freq = {};
  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
};

// console.log(frequency("hello"));

// Write a function to merge two sorted arrays into one sorted array.
let mergeToSortedArray = (arr1, arr2) => {
  let merge = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merge.push(arr1[i]);
      i++;
    } else {
      merge.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) merge.push(arr1[i++]);
  while (j < arr2.length) merge.push(arr2[j++]);

  return merge;
};

console.log(mergeToSortedArray([1, 3, 5], [2, 4, 6]));

// Implement a function debounce() and explain its use.

// Write a function that uses closures to maintain a counter (increment/decrement).

// Implement a function to memoize another function.

// Write a program using Promises that simulates fetching data (with setTimeout).

// Create a function using async/await to fetch and log data from a fake API (like https://jsonplaceholder.typicode.com/posts).

// Implement a custom map() function that works like the built-in .map().

// Write a function to deep clone an object.
