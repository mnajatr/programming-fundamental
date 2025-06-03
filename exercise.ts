//////////////////////////////////////////////
// EXERCISE 1: Create a function that can create a triangle pattern according to the height we provide like the following:
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

const triangle = function (height: number) {
  for (let i = 1; i <= height; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp += j;
    }
    console.log(temp);
  }
};
triangle(5);

//////////////////////////////////////////////
// EXERCISE 2: Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters: n → total looping
// - Example: n = 6 → 1, 2, Fizz, 4, Buzz, Fizz
// - Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = function (n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(6);

//////////////////////////////////////////////
// EXERCISE 3: - Create a function to calculate Body Mass Index (BMI)
// - Formula : BMI = weight (kg) / (height (meter))²
// - Parameters : weight & height
// - Return values :
// - < 18.5 return “less weight”
// - 18.5 - 24.9 return “ideal”
// - 25.0 - 29.9 return “overweight”
// - 30.0 - 39.9 return “very overweight”
// - > 39.9 return “obesity”z

const calcBmi = function (weight: number, height: number) {
  let bmi = weight / height ** 2;
  // let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity'z";
  }
};

const naja = calcBmi(70, 1.7);
console.log(naja);

//////////////////////////////////////////////
// EXERCISE 4: Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// - Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

const odd = function () {
  let results = [];
  for (let i: number = 1; i <= numbers.length; i++) {
    if (i % 2 === 0) {
      results.push(i);
    }
  }
  return results;
};

console.log(odd());

//////////////////////////////////////////////
// EXERCISE 5: Write a function to split a string and convert it into an array of words
// - Example : “Hello World” → [“Hello”, “World”]

const splitString = function (str: string) {
  return str.split(" ");
};

console.log(splitString("Hello World"));
