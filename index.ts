////////////////////////
// Array and Function//
//////////////////////

/*
//////////////////////////////////////////////
// Array
const arr: string[] = ["A", "B", "C", "D", "E"];
const arr2: string[] = new Array("F", "G", "H", "I", "J");
console.log(`Array 1: ${arr}`);
console.log(`Array 2: ${arr2}`);

const arrNums: number[] = [32, 21, 1, 44, 2];
// console.log(`Array Number: ${arrNums}`);

//////////////////////////////////////////////
// Array built-in methods
const arr: string[] = ["A", "B", "C", "D", "E"];
const arr2: string[] = new Array("F", "G", "H", "I", "J");

const arrNums: number[] = [32, 21, 1, 44, 2];

arrNums.toString(); // mengubah tipe data menjadi string
console.log(`.toString() = ${arrNums}`);

arrNums.join("-"); // menggabungkan semua elemen
console.log(`.join() = ${arrNums}`);

arr.pop(); // menghapus data dari belakang
console.log(`.pop() = ${arr}`);

arr.push("F"); // menambahkan data dari belakang
console.log(`.push() = ${arr}`);

arr.shift(); // menghapus data dari depan
console.log(`.shift() = ${arr}`);

arr.unshift("F", "G"); // menambahkan data dari depan
console.log(`.unshift() = ${arr}`);

arr.length; // menghitung panjang
console.log(`.length = ${arr}`);

arr.splice(2, 0, "N"); // menghapus/menambahkan value
console.log(`.splice() = ${arr}`);

const newArr = arr.concat(arr2); // menggabungkan antar array dengan tipe data yang sama
console.log(newArr);

arrNums.sort((a, b) => a - b); // mengurutkan elemen-elemen dalam sebuah array
console.log(arrNums);

newArr.reverse(); // membalik urutan elemen dalam sebuah array
console.log(newArr);

newArr.forEach((e) => {
  // menjalankan fungsi yang diberikan pada setiap elemen dalam array
  console.log(e);
});

console.log(arrNums.filter((value) => value % 2 == 0)); // mencari bilangan genap

console.log(arrNums.find((v) => v == 21)); // mencari elemen "21"

console.log(arrNums.findIndex((v) => v == 0)); // mencari elemen "21" beserta indexnya

console.log(arrNums.every((v) => v >= 0)); // mencari elemen yang diatas 0 dan mencari semuanya = true
console.log(arrNums.some((v) => v >= 10)); // mencari elemen yang diatas 10 dan sesuai kondisi = true
//////////////////////////////////////////////
// Looping array
let fruits: string[] = ["Apple", "Banana", "Mango", "Orange"];

using method .forEach()
fruits.forEach((element) => {
  console.log(element);
});

using for of
for (const fruit of fruits) {
  console.log(fruit);
}

console.log(fruits[fruits.length - 1]);
console.log(fruits[3]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//////////////////////////////////////////////
// Function

// Function Declaration
function ganjilGenap(n: number) {
  const results = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      results.push(`${i} adalah genap`);
    } else {
      results.push(`${i} adalah genap`);
    }
  }
  return results;
}

console.log(ganjilGenap(10));

// Function Expression
const ganjilGenap = function (n: number) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(`${i} adalah genap`);
    } else {
      console.log(`${i} adalah ganjil`);
    }
  }
};

ganjilGenap(100);

// Rest Parameters
const myFunc = function (x: number, y: number, ...others: number[]) {
  console.log(others);
  return x + y;
};

console.log(myFunc(1, 2, 3, 4, 5));

// Nested Function
const getMessage = function (firstName: string) {
  const sayHello = function () {
    return `Hello, ${firstName}.`;
  };
  const welcomeMessage = function () {
    return `Welcome to Purwadhika!`;
  };

  return `${sayHello()} ${welcomeMessage()}`;
};

const message: string = getMessage("Muhmmad Naja");
console.log(message);

// Closure
const greeting = function (name: string) {
  const defaultMessage: string = "Hello ";
  return function () {
    return defaultMessage + name;
  };
};

const greetingNaja = greeting("Naja");
console.log(greetingNaja());

// Currying
const multiplier = function (factor: number) {
  return function (number: number) {
    return number * factor;
  };
};
const mul3 = multiplier(3);
const mul5 = multiplier(5);
console.log(mul3(5)); // 15
console.log(mul5(5)); // 25

// Recursive
const countDown = function (fromNumber: number) {
  console.log(fromNumber);
  let nextNumber: number = fromNumber - 1;
  if (nextNumber > 0) {
    countDown(nextNumber);
  }
};

countDown(3);

// Arrow Function
const square = (number: number) => number * number;
console.log(square(10));

// Predefined Function
console.log(2 / 0);
console.log(isFinite(2 / 0));

const str: string = "10";
console.log(parseInt(str));
*/
