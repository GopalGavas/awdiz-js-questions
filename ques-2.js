/*
1. Find the second highest number in an array without sorting it. 
Input: [10, 5, 20, 8, 15]
Output: 15 
*/
let arr = [10, 5, 20, 8, 15];
let highest = -Infinity;
let secondHighest = -Infinity;

for (let index = 0; index < arr.length; index++) {
  if (arr[index] > highest) {
    secondHighest = highest;
    highest = arr[index];
  } else if (arr[index] > secondHighest && arr[index] < highest) {
    secondHighest = arr[index];
  }
}

console.log(`Highest: ${highest}, Second Highest: ${secondHighest}`);

/*
2. Character frequency counter from a string.
Input: "apple"
Output: { a: 1, p: 2, l: 1, e: 1 }
*/
let string = "apple";
let frequency = {};
for (let index = 0; index < string.length; index++) {
  let char = string[index];
  frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

/*
3. Reverse only words in an array of strings. 
Input: ["hello", "world"] 
Output: ["olleh", "dlrow"] 
*/
// {APPROACH 1}
let words = ["hello", "world"];
let reverseWords = words.map((word) => {
  return word.split("").reverse().join("");
});

console.log(reverseWords);

// {APPROACH 2}
/*
let words2 = ["hello", "world"];
let result = [];

for (let index = 0; index < words2.length; index++) {
  let word = words2[index];
  let reversed = "";

  for (let j = word.length - 1; j >= 0; j--) {
    reversed += word[j];
  }

  result.push(reversed);
}

console.log(result);
*/

/*
4. Check even or odd using map. 
Input: [1, 2, 3, 4] 
Output: ["odd", "even", "odd", "even"] 
*/
let oddEvenNo = [1, 2, 3, 4];
let oddEvenStr = oddEvenNo.map((num) => {
  //   if (num % 2 == 0) {
  //     return "even";
  //   } else {
  //     return "odd";
  //   }

  return num % 2 == 0 ? "even" : "odd";
});

console.log(oddEvenStr);

/*
5. Flatten a nested array (1 level deep). 
Input: [1, 2, [3, 4], 5] 
Output: [1, 2, 3, 4, 5]
*/
let nestedArr = [1, 2, [3, 4], 5];
console.log(nestedArr.flat());

// 6. Print all prime numbers between 10 and 50.
let primes = [];
for (let index = 10; index <= 50; index++) {
  let isPrime = true;

  if (index <= 1) {
    isPrime = false;
  } else {
    for (i = 2; i <= Math.sqrt(index); i++) {
      if (index % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    primes.push(index);
  }
}
console.log(primes);

/*
7. Filter names that start with vowels.
Input: ["Alice", "Bob", "Eve", "Uma", "Charlie"]
Output: ["Alice", "Eve", "Uma"]
*/
let names = ["Alice", "Bob", "Eve", "Uma", "Charlie"];
let filteredResults = names.filter((name) => {
  name = name.toLowerCase();
  return (
    name.startsWith("a") ||
    name.startsWith("e") ||
    name.startsWith("i") ||
    name.startsWith("o") ||
    name.startsWith("u")
  );
});

console.log(filteredResults);

/*
8. Rotate array by one to the right.
Input: [1, 2, 3, 4]
Output: [4, 1, 2, 3]
*/
let array = [1, 2, 3, 4];
let lastElement = array.pop();
array.unshift(lastElement);
console.log(array);

/*
9. Check if all array elements are greater than 10.
Input: [12, 15, 22]
Output: true
*/
let input = [12, 15, 22];
let output = true;
for (let index = 0; index < input.length; index++) {
  if (input[index] < 10) {
    output = false;
    break;
  }
}

console.log(output);

/*
10. Filter numbers divisible by 3 and 5.
Input: [10, 15, 30, 20, 45]
Output: [15, 30, 45]
*/
let numbers = [10, 15, 30, 20, 45];
let divisibleBy = numbers.filter((num) => num % 3 === 0 && num % 5 === 0);
console.log(divisibleBy);

/*
11. Fibonacci sequence up to 15 terms.
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
*/
let first = 0;
let second = 1;
let fibo = [];

fibo.push(first);
fibo.push(second);

for (let i = 2; i < 15; i++) {
  let third = first + second;
  fibo.push(third);
  first = second;
  second = third;
}
console.log(fibo);

/*
12. Count occurrences of a value in array.
Input: [1, 2, 1, 3, 1, 4], Element: 1
Output: 3
*/
let target = 1;
let occurrences = 0;
let arrNumber = [1, 2, 1, 3, 1, 4];
for (let i = 0; i < arrNumber.length; i++) {
  if (arrNumber[i] == target) {
    occurrences++;
  }
}
console.log(`Occurences: ${occurrences}`);

/*
13. Sum of even numbers using reduce.
Input: [1, 2, 3, 4, 5, 6]
Output: 12
*/
let arrNum = [1, 2, 3, 4, 5, 6];
let sum = arrNum.reduce((acc, num) => {
  if (num % 2 == 0) {
    return acc + num;
  }

  return acc;
}, 0);

console.log(sum);

/*
14. Check if string is palindrome.
Input: "madam"
Output: true
*/
let str = "madam";
let start = 0;
let end = str.length - 1;
let isPalindrome = true;

while (start < end) {
  if (str[start] != str[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

console.log(isPalindrome);
/*
15. Return grade based on marks using switch.
Input: Marks: 85
Output: B
*/

let marks = 85;
let grade;
switch (true) {
  case marks >= 90:
    grade = "A";
    break;
  case marks >= 80:
    grade = "B";
    break;
  case marks >= 70:
    grade = "C";
    break;
  default:
    break;
}
console.log(grade);

/*
17. Remove duplicates from array without Set.
Input: [1, 2, 2, 3, 4, 1]
Output: [1, 2, 3, 4]
*/
let arrDuplicates = [1, 2, 2, 3, 4, 1];
let uniqueArr = [];

for (let i = 0; i < arrDuplicates.length; i++) {
  if (!uniqueArr.includes(arrDuplicates[i])) {
    uniqueArr.push(arrDuplicates[i]);
  }
}
console.log(uniqueArr);

/*
18. Slice first 3 elements of array.
Input: [10, 20, 30, 40, 50]
Output: [10, 20, 30]
*/
let Arr = [10, 20, 30, 40, 50];
console.log(Arr.slice(0, 3));

/*
19. Find intersection of two arrays.
Input: [1, 2, 3] and [2, 3, 4]
Output: [2, 3]
*/
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let intersection = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
    intersection.push(arr1[i]);
  }
}
console.log(intersection);

/*
20. Reverse array using while loop (in-place).
Input: [1, 2, 3, 4]
Output: [4, 3, 2, 1]
*/
let arrayRev = [1, 2, 3, 4];
let startOfArr = 0;
let endOfArr = arrayRev.length - 1;
while (startOfArr < endOfArr) {
  let temp = arrayRev[startOfArr];
  arrayRev[startOfArr] = arrayRev[endOfArr];
  arrayRev[endOfArr] = temp;

  startOfArr++;
  endOfArr--;
}
console.log(arrayRev);

/*
21. Check if all elements in an array are positive (use flag variable).
Input: [1, 4, 6, 9]
Output: true
Use a flag set to true, and turn it false if a negative number is found in loop.
*/
let posArr = [1, 4, 6, 9];
let positive = true;

for (let i = 0; i < posArr.length; i++) {
  if (posArr[i] < 0) {
    positive = false;
    break;
  }
}

console.log(positive);

/*
22. Check if a string has both uppercase and lowercase letters.
Input: "HelloWorld"
Output: true
Use two flags: hasUpper and hasLower.
*/
let inputStr = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let i = 0; i < inputStr.length; i++) {
  let char = inputStr[i];
  if (char >= "A" && char <= "Z") hasUpper = true;
  if (char >= "a" && char <= "z") hasLower = true;
  if (hasUpper && hasLower) break;
}

let result = hasUpper && hasLower;
console.log(result);

/*
23. Determine if a number is prime using flag inside loop.
Input: 13
Output: true
Set flag to false if any divisor is found in loop
*/
let inputNo = 13;
let isPrime = true;

if (inputNo <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(inputNo); i++) {
    if (inputNo % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);

/*
24. Check if an array is sorted in ascending order using flag.
Input: [2, 5, 8, 9]
Output: true
Set flag false if any element is greater than next.
*/
let isArrAsc = [2, 5, 8, 9];
let isAsc = true;

for (let index = 0; index < isArrAsc.length; index++) {
  if (isArrAsc[index] > isArrAsc[index + 1]) {
    isAsc = false;
    break;
  }
}
console.log(isAsc);

/*
25. Check if a word has repeating characters using flag.
Input: "coding"
Output: false
Use a flag and object/map to track character repetition.
*/

let word = "coding";
let isRepeated = false;
let charObj = {};

for (let i = 0; i < word.length; i++) {
  let char = word[i];

  if (charObj[char]) {
    isRepeated = true;
    break;
  } else {
    charObj[char] = true;
  }
}

console.log(isRepeated);
