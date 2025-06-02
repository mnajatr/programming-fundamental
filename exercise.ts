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

// const cm: number = 500000;

// console.log(`${cm} CM -> ${cm / 100000} KM`);

//////////////////////////////
// QUESTION 4: Write a code to format number as currency (IDR)
// (Tulis kode untuk memformat angka sebagai mata uang (IDR))

// const jumlah: number = 1000;
// const idrFormat: any = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
//   maximumFractionDigits: 2,
// });

// console.log(idrFormat.format(jumlah));

//////////////////////////////
// QUESTION 5: Write a code to remove the first occurrence of a given “search string” from a string
// (Tulis kode untuk menghapus kemunculan pertama dari “string pencarian” yang diberikan dari sebuah string)

// const str: string = "Hello World";
// const cari: string = "ell";
// const hasilStr: any = str.replace(cari, "");

// console.log(`string = "${str}", search string = "${cari}" -> "${hasilStr}"`);

//////////////////////////////
// QUESTION 6: Write a code to swap the case of each character from string
// (Tulis kode untuk menukar huruf besar/kecil setiap karakter dari string)

// const str: any = "The QuiCk BrOwN Fox";
// let hasil: string = "";
// // console.log(str.charAt(4));

// for (let i = 0; i < str.length; i++) {
//   if (str.charAt(i) == str.charAt(i).toUpperCase()) {
//     hasil += str.charAt(i).toLowerCase();
//   } else {
//     hasil += str.charAt(i).toUpperCase();
//   }
// }
// console.log(hasil);

//////////////////////////////
// QUESTION 7: Write a code to find the largest of two given integers.
// (Tulis kode untuk menemukan bilangan terbesar dari dua bilangan bulat yang diberikan)

// const num1: number = 42;
// const num2: number = 27;

// console.log(`num1 = ${num1} > num2 = ${num2} = ${num1 > num2 ? num1 : num2}`);

//////////////////////////////
// QUESTION 8: Write a conditional statement to sort three numbers.
// (Tuliskan pernyataan kondisional untuk mengurutkan tiga angka)

// let num1: number = 42; // If per
// let num2: number = 27;
// let num3: number = 18;

// if (num1 > num2) {
//   let temp = num1;
//   num1 = num2;
//   num2 = temp;
// }

// if (num1 > num3) {
//   let temp = num1;
//   num1 = num3;
//   num3 = temp;
// }
// if (num2 > num3) {
//   let temp = num2;
//   num2 = num3;
//   num3 = temp;
// }

// console.log(`${num1}, ${num2}, ${num3}`);

//////////////////////////////
// QUESTION 9: Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// (Tulis kode yang menunjukkan 1 jika inputnya berupa string, 2 jika inputnya berupa angka, dan 3 untuk tipe data lainnya.)

// const example: any = true;

// if (typeof example === "string") {
//   console.log("1");
// } else if (typeof example === "number") {
//   console.log("2");
// } else if (typeof example === "boolean") {
//   console.log("3");
// } else if (typeof example === "object") {
//   console.log("4");
// } else {
//   console.log("5");
// }

//////////////////////////////
// QUESTION 10: Write a code to change every letter a into * from a string of input.
// (Tulis kode untuk mengubah setiap huruf a menjadi * dari string input.)

const str: string = "An apple a day keeps the doctor away";
const hasilStr: any = str.replace(/a/gi, "*");

console.log(`${str} -> ${hasilStr}`);
