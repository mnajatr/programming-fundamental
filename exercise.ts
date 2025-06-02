//////////////////////////////
// QUESTION 1: Write a code to display the multiplication table of a given integer.
// (Tulis kode untuk menampilkan tabel perkalian bilangan bulat yang diberikan.)

let input: number = 9;
const limit: number = 10;

console.log(`Tabel perkalian untuk: ${input}`);
for (let i: number = 1; i <= limit; i++) {
  console.log(`${input} x ${i}: ${input * i}`);
}
