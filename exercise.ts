//////////////////////////////
// QUESTION 1: Write a code to check whether the number is odd or even
// (Tulis kode untuk memeriksa apakah angka tersebut ganjil atau genap)

// let num: number = 25;
// if (num % 2 == 0) {
//   console.log(`${num} even number`);
// } else {
//   console.log(`${num} odd number`);
// }

//////////////////////////////
// QUESTION 2: Write a code to check whether the number is prime number or not
// (Tulis kode untuk memeriksa apakah bilangan tersebut bilangan prima atau bukan)
let n: number = 7;
let d: number = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) d++;
}

if (d == 2) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is not a prime number`);
}

//////////////////////////////
// QUESTION 3: Write a code to find the sum of the numbers 1 to N
// (Tulis kode untuk menemukan jumlah angka 1 sampai N)

// const n: number = 5;
// let sum: number = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);

//////////////////////////////
// QUESTION 4: Write a code to find factorial of a number
// (Tulis kode untuk mencari faktorial suatu bilangan)

// const n: number = 4;
// let sum: number = 1;

// for (let i = n; i >= 1; i--) {
//   sum *= i;
// }

// console.log(sum);

//////////////////////////////
// QUESTION 5: Write a code to print the first N fibonacci numbers
// (Tulis kode untuk mencetak N angka fibonacci pertama)

// let n: number = 15;
// let a: number = 0;
// let b: number = 1;

// for (let i = 1; i < n; i++) {
//   let next: number = a + b;
//   a = b;
//   b = next;
// }

// console.log(b);
