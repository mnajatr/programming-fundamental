/*
//////////////////////////////////////////////
// PROBLEM 1: Write a code to find area of rectangle.
// (Tulis kode untuk mencari luas persegi panjang.)

// TEST DATA : length = 5, width = 3

const panjang: number = 5;
const lebar: number = 3;
const luas: number = panjang * lebar;

console.log(luas);
//////////////////////////////////////////////
// PROBLEM 2: Write a code to find perimeter of rectangle.
// (Tulis kode untuk mencari keliling persegi panjang.)

// TEST DATA : length = 5, width = 3

const panjang: number = 5;
const lebar: number = 3;

const keliling: number = 2 * (panjang + lebar);

console.log(keliling);

//////////////////////////////////////////////
// PROBLEM 3: Write a code to find diameter, circumference and area of a circle.
// (Tulis kode untuk mencari diameter, keliling dan luas lingkaran.)

// TEST DATA: radius = 5

const radius: number = 5;

const d: number = 2 * radius;
const k: number = 2 * 3.14 * radius;
const l: number = 3.14 * radius * radius;

console.log(d, k, l);

//////////////////////////////////////////////
// PROBLEM 4: Write a code to find diameter, circumference and area of a circle.
// (Tulis kode untuk menemukan sudut segitiga jika dua sudut diberikan.)

// TEST DATA:  a = 80, b = 65

const a: number = 80;
const b: number = 65;

const total = 180 - (a + b);

console.log(total);

//////////////////////////////////////////////
// PROBLEM 4: Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// (Tulis kode untuk mengubah hari menjadi tahun, bulan, dan hari (Catatan: 1 tahun: 365 hari, 1 bulan: 30 hari).)

const totalHari: number = 400;
const sisaHari: number = totalHari % 365; // 35

const year = totalHari / 365;
const month = sisaHari / 30;
const day = sisaHari % 30;

console.log(
  `${totalHari} Days -> ${year.toFixed()} year, ${month.toFixed()} month, ${day.toFixed()} days`
);

//////////////////////////////////////////////
// PROBLEM 5: Write a code to get difference between dates in days.
// (Tulis kode untuk mendapatkan perbedaan antara tanggal dalam hari.)

const dateStr1: string = "2022-01-20";
const dateStr2: string = "2022-01-22";

const date1: Date = new Date(dateStr1);
const date2: Date = new Date(dateStr2);

const date = date2.getTime() - date1.getTime();
const ms = 1000 * 60 * 60 * 24;

console.log(date / ms);
*/
