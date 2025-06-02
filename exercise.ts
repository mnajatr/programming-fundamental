//////////////////////////////
// QUESTION 1: Write a code to display the multiplication table of a given integer.
// (Tulis kode untuk menampilkan tabel perkalian bilangan bulat yang diberikan.)

// let input: number = 9;
// const limit: number = 10;

// console.log(`Tabel perkalian untuk: ${input}`);
// for (let i: number = 1; i <= limit; i++) {
//   console.log(`${input} x ${i}: ${input * i}`);
// }

//////////////////////////////
// QUESTION 2: Write a code to check whether a string is a palindrome or not.
// (Tulis kode untuk memeriksa apakah suatu string adalah palindrom atau bukan.)

// let str: string = "kodok";
// let normalStr: string = str.toLowerCase();
// let reverseStr: string = "";

// for (let i = normalStr.length - 1; i >= 0; i--) {
//   reverseStr += normalStr[i];
// }

// if (normalStr === reverseStr) {
//   console.log(`${str} adalah palindrom`);
// } else {
//   console.log(`${str} bukan palindrom`);
// }

//////////////////////////////
// QUESTION 3: Write a code to convert centimeter to kilometer.
// (Tulis kode untuk mengubah sentimeter ke kilometer.)

const cm: number = 500000;

console.log(`${cm} CM -> ${cm / 100000} KM`);
