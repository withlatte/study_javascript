"use strict";
// 1. string concatenation
console.log("My" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric Operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 / 2);
console.log(2 ** 3);

// 3. Increment and Decrement operators
let counter = 2;
const preIncrement = ++counter;
// means counter = counter + 1;
//       preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// means counter = counter - 1;
//       preDecrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) : find first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and) : find first falsy value
// 종종 긴 if 구문을 압축해서 사용하도록 도와준다
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//     nullableObject.something;
// }
console.log(`or: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("-_-");
  }
  return true;
}

// ! (not) operator
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == : loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === : strict equality, without type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operator: if
// if, else if , else
const name = "ellie";
if (name === "ellie") {
  console.log(`Welcome ${name}!!`);
} else if (name === "coder") {
  console.log(`Welcome ${name}!!`);
} else {
  console.log("unknown name");
}

// 9. Ternery operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
// if else 를 여러번 반복할 경우 가독성을 높이기 위해 사용
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away IE");
    break;
  case "Chrome":
    console.log("Hello Chrome");
    break;
  case "Firefox":
    console.log("What's up Fox");
    break;
  default:
    console.log("same same");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`${i}`);
  i--;
} while (i > 0);

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i} / j: ${j}`);
  }
}

// break, continue
for (let x = 0; x <= 10; x++) {
  if (x % 2 == 0) {
    console.log(x);
  } else continue;
}

for (let x = 0; x <= 10; x++) {
  if (x == 8) {
    break;
  }
  console.log(x);
}
