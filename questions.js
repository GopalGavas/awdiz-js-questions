/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

let oddNum = (array) => {
  let obj = {};
  let val;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    obj[num] = (obj[num] || 0) + 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] % 2 == 1) {
      val = array[i];
    }
  }

  return val;
};

console.log(oddNum([7]));
console.log(oddNum([0]));
console.log(oddNum([1, 1, 2]));
console.log(oddNum([0, 1, 0, 1, 0]));
console.log(oddNum([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

let sumOftwoLowest = (array) => {
  let smallestNum = Infinity;
  let secondSmallestNum = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      continue;
    }
    if (array[i] < smallestNum && array[i] > 0) {
      secondSmallestNum = smallestNum;
      smallestNum = array[i];
    } else if (
      array[i] < secondSmallestNum &&
      array[i] >= smallestNum &&
      array[i] > 0
    ) {
      secondSmallestNum = array[i];
    }
  }

  console.log(smallestNum, secondSmallestNum);

  return smallestNum + secondSmallestNum;
};

console.log("Sum of the two lowest: ", sumOftwoLowest([19, 5, 42, 2, 77]));
console.log("Sum of the two lowest: ", sumOftwoLowest([389, 389, 389, 499]));
console.log(
  "Sum of the two lowest: ",
  sumOftwoLowest([10, 343445353, 3453445, 3453545353453])
);
