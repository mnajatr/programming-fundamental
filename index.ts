/*
//////////////////////////////////////
// Conditional and loop statements //
/////////////////////////////////////
let age: number = 21;

/////////////////////////////////
// If statement
if (age >= 17) {
  console.log("You can now create an ID Card");
}

/////////////////////////////////
// Else statement
if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

/////////////////////////////////
// Else if statement & Chaining conditions
let grade: string = "A";

if (grade == "A") {
  console.log("Excellent result!");
} else if (grade == "B") {
  console.log("Great result!");
} else if (grade == "C") {
  console.log("Average result!");
} else {
  console.log("Invalid grade");
}

/////////////////////////////////
// Switch Case
let now: Date = new Date();
let day: number = now.getDay(); // 0 - 6

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
}

/////////////////////////////////
// Truthy and falsy values
let word = "";

if (word) {
  console.log("Hello World!");
}

// console.log(Number("12a"));

/////////////////////////////////
// Logical Operators
let x: number = 6;
let y: number = 3;

if (x < 10 || y > 1) {
  // console.log("Hello World!");
}

// console.log(!(x == 6));

const gender: string = "F";
if (gender == "M") {
  console.log("Male");
} else {
  console.log("Female");
}

/////////////////////////////////
// Ternary Operator
const str: string = "Typescript";

console.log(str === "Typescript" ? "Benar" : "Salah");

/////////////////////////////////
// Short-Circuiting
const value: string = "Andi";
const name: string = value && "Budi"; // Jika value "ada" maka log Budi
// const name: string = value || "Budi"; // Jika value "" maka log value

console.log(name);


/////////////////////////////////
// Loop statements
for (let i: number = 1; i <= 10; i++) {
  console.log(`Hello World ke ${i}`);
  if (i == 5 i) continue;
}

for (let i: number = 10; i >= 1; i--) {
  console.log(`Hello World ke ${i}`);
}

/////////////////////////////////
// While loop
let i: number = 10;
while (i >= 1) {
  console.log(`Hello world ke-${i}`);
  i--;
}

/////////////////////////////////
// Do … While loop
let i: number = 1;
do {
  console.log(`Hello World ke-${i}`);
  i++;
} while (i <= 10);

/////////////////////////////////
// Break & Continue
let sum: number = 1;

while (true) {
  console.log(sum);
  if (sum == 10) break;
  sum++;
}

for (let i: number = 1; i <= 10; i++) {
  console.log(`Hello World ke ${i}`);
  if (i == 5 || i == 9) continue;
}

for (let i = 1; i <= 10; i++) {
  // console.log("*".repeat(i));
  let bintang = "";
  for (let j = 1; j <= i; j--) {
    bintang += "*";
  }
  console.log(bintang);
}
*/
