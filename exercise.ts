//////////////////////////////////////////////
// EXERCISE 1: Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

// const findMinMax = function (arr: number[]) {
//   arr.sort((a, b) => a - b);
//   const lowest = arr[0];
//   const highest = arr[arr.length - 1];
//   const average = arr.reduce((a, b) => a + b) / arr.length;
//   return { lowest, highest, average };
// };

// const arrNumbers: number[] = [12, 5, 23, 18, 4, 45, 32];
// console.log(findMinMax(arrNumbers));

//////////////////////////////////////////////
// EXERCISE 2: Write a function that takes an array of words and returns a string by concatenating the words in the array,separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// const concat = function (arr: string[]) {
//   const last = arr.pop();
//   return `"${arr.join()}, and ${last}"`;
// };

// const arrStr: string[] = ["apple", "banana", "cherry", "date"];
// console.log(concat(arrStr));

//////////////////////////////////////////////
// EXERCISE 3: Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

// const findSecondSmallestNumber = function (arr: number[]) {
//   arr.sort((a, b) => a - b);
//   const smallestSecond = arr[1];
//   return smallestSecond;
// };

// const arrNumbers: number[] = [5, 3, 1, 7, 2, 6];
// console.log(findSecondSmallestNumber(arrNumbers));

//////////////////////////////////////////////
// EXERCISE 4: Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

// const calculateArrays = function (arr1: number[], arr2: number[]) {
//   let results: number[] = [];
//   for (let i = 0; i < arr1.length; i++) {
//     results.push(arr1[i] + arr2[i]);
//   }
//   return results;
// };

// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [3, 2, 1];
// console.log(calculateArrays(arr1, arr2));

//////////////////////////////////////////////
// EXERCISE 5: Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

const addElementEndOfArray = function (arr: number[], newEl: number) {
  if (arr.includes(newEl)) {
    return arr;
  } else {
    arr.push(newEl);
    return arr;
  }
};

const arr: number[] = [1, 2, 3, 4];
console.log(addElementEndOfArray(arr, 7));

//////////////////////////////////////////////
// EXERCISE 6:  Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

//////////////////////////////////////////////
// EXERCISE 7: Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]

// const maxSize = function (maxSize: number, arr: number[]) {
//   arr.length = maxSize;
//   return arr;
// };

// const arr: number[] = [5, 10, 24, 3, 6, 7, 8];
// console.log(maxSize(5, arr));

//////////////////////////////////////////////
// EXERCISE 8: Write a function that will combine 2 given array into one array
// b. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

// const combineArr = function (arr1: number[], arr2: number[]) {
//   return arr1.concat(arr2);
// };

// const arr1: number[] = [1, 2, 3];
// const arr2: number[] = [4, 5, 6];
// console.log(combineArr(arr1, arr2));

//////////////////////////////////////////////
// EXERCISE 9: Write a function to find duplicate values in an array
// b. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

//////////////////////////////////////////////
// EXERCISE 10: Write a function to find the difference in 2 given array
// b. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// const findDiffrence = function (arr1: number[], arr2: number[]) {
//   const results: number[] = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr1.includes(arr2[i])) results.push(arr2[i]);
//     if (!arr2.includes(arr1[i])) results.push(arr1[i]);
//   }
//   return results;
// };

// const arr1: number[] = [1, 2, 3, 4, 5];
// const arr2: number[] = [3, 4, 5, 6, 7];
// console.log(findDiffrence(arr1, arr2));

//////////////////////////////////////////////
// EXERCISE 11: Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// const getPrimitiveData = function (arr: any[]) {
//   const results: any[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     const type = typeof arr[i];
//     if (
//       type === "string" ||
//       type === "number" ||
//       type === "bigint" ||
//       type === "boolean" ||
//       type === "undefined"
//     ) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// };

// const arr: any[] = [1, [], undefined, {}, "string", {}, []];
// console.log(getPrimitiveData(arr));

//////////////////////////////////////////////
// EXERCISE 12: Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

//////////////////////////////////////////////
// EXERCISE 13: Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
