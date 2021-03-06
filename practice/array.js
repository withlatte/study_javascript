"use strict";

// Array🥕
// 1. Delcaration
const arr1 = new Array();
const arr2 = [1, 2, 3];

// 2. Index Position
const fruit = ["🍈", "🥝", "🍑"];
console.log(fruit);
console.log(fruit.length);
console.log(fruit[1]);
console.log(fruit[fruit.length - 1]); // 가장 마지막 아이템 풀력

// 3. Looping over an array
// print all fruits
// - for loop 사용(for, for...of, forEach)
for (const x of fruit) {
  console.log(x);
}
console.clear();
fruit.forEach(function (value, index, array) {
  console.log(value, index, array);
});
// 위 코드를 아래처럼 Arrow function을 사용하여 단축
fruit.forEach((value, index, array) => console.log(value, index, array));
fruit.forEach((value) => console.log(value));

// 4. Addition, Deletion, Copy
// - push: add an item in the end
// - unshift: add an item in the beginning
fruit.push("🍍", "🍎");
fruit.forEach((value) => console.log(value));
// - pop: remove an item from the end
// - shift: remove an item from the beginning
fruit.pop();
fruit.forEach((value) => console.log(value));

fruit.unshift("🍎");
console.log(fruit);
fruit.shift();
console.log(fruit);
// 하지만, shift와 unshift는 push,pop 보다 매우 비효율적이다(느리다)

// - splice: 배열 중 index에 해당하는 item만 삭제하는 함수
fruit.splice(0, 1, "🍎", "🍍");
console.log(fruit);
// - concat: 여러개의 배열을 합쳐주는 함수
const newFruit = fruit.concat(arr2);
console.log(newFruit);

// 5. Searching 검색
// - indexOf : 0번째 인덱스부터 검색
// - lastIndexOf : 마지막 인덱스부터 검색
// - includes
console.clear();
console.log(fruit);
console.log(fruit.indexOf("🍍"));
console.log(fruit.indexOf("this"));
console.log(fruit.includes("🍍"));
console.log(fruit.includes("this"));

/*
 **숙제 : 배열 API 코딩을 보고, 각 함수에 대해 공부할 것
 */
console.clear();

// Q1.make a string out of an array
const fruits = ["apple", "banana", "orange"];
fruits.forEach((value) => console.log(value));

// Q2. make an array out of a string
const fruits2 = "🍎, 🥝, 🍌, 🍒";
const newFruits = fruits2.split(", ");
console.log(newFruits);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
console.log(array.reverse());

// Q4. make new array without the first two elements
array.splice(0, 2);
console.log(array);
// ========================================== //
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
students.forEach(function (each) {
  if (each.score === 90) {
    console.log(each.name);
  }
});

// Q6. make an array of enrolled students
const enrolled = [];
students.forEach(function (each) {
  if (each.enrolled) {
    enrolled.push(each);
  }
});
console.log(enrolled);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const score = [];
students.forEach(function (each) {
  score.push(each.score);
});
console.log(score);

// Q8. check if there is a student with the score lower than 50

students.forEach(function (each) {
  if (each.score <= 50) {
    console.log(`${each.name}'s score is lower than 50.`);
  }
});

// Q9. compute students' average score
let total_score = 0;
students.forEach(function (each) {
  total_score += each.score;
});
let avg_score = total_score / students.length;
console.log(avg_score);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.log(score.toString());
console.log(score);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
console.log(score.sort().toString());
