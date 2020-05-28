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

// 숙제 : 배열 API 코딩을 보고, 각 함수에 대해 공부할 것
