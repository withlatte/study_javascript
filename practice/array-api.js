/*
 **숙제 : 배열 API 코딩을 보고, 각 함수에 대해 공부할 것
 */
console.clear();

// Q1.make a string out of an array
const fruits = ["apple", "banana", "orange"];
// fruits.forEach((value) => console.log(value));
const fruits_str = fruits.join("^^");
console.log(fruits_str);

// Q2. make an array out of a string
const fruits2 = "🍎, 🥝, 🍌, 🍒";
const newFruits = fruits2.split(", ");
console.log(newFruits);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
console.log(array.reverse());

// Q4. make new array without the first two elements
// array.splice(0, 2); 기존 배열을 수정
const new_arr1 = array.slice(2, 4 + 1); // 새로운 배열을 만듦
console.log(new_arr1);
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
{
  const result = students.find(function (student) {
    return student.score === 90; // true 리턴 후 그 학생 오브젝트를 리턴
  });
  console.log(result);
}
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
const enrolled = [];
students.forEach(function (each) {
  if (each.enrolled) {
    enrolled.push(each);
  }
});
console.log(enrolled);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}
const score = [];
students.forEach(function (each) {
  score.push(each.score);
});
console.log(score);

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score <= 50);
  console.log(result);
  // boolean을 리턴한다
}
students.forEach(function (each) {
  if (each.score <= 50) {
    console.log(`${each.name}'s score is lower than 50.`);
  }
});

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

let total_score = 0;
students.forEach(function (each) {
  total_score += each.score;
});
let avg_score = total_score / students.length;
console.log(avg_score);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}
// console.log(score.toString());
// console.log(score);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
