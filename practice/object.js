"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// obj = { key: value }; 오브젝트는 키와 값의 집합체이다.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 1/ Literals and Properties
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "eliie", age: 21 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// 나중에 인스턴스를 추가하거나 제거가 가능하다
// 사후 유지관리를 위해 이런 사용법은 피하는게 좋다.
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed Properties
// 오브젝트를 불어올때는 .을 이용하거나 배열의 키값을 불러오는 방식을 사용
// 배열의 키값은 항상 String 으로 지정하여 불러와야 한다.
// 일반적으로는 .을 사용하나, 함수의 인자처럼 불러오는 키의 이름이 변동적일때
// 배열형식으로 불러와야 오브젝트의 인스턴스 키값을 받아올 수 있다
console.log(ellie.name);
console.log(ellie["name"]);

ellie["hasJob"] = true;

function printValue(obj, key) {
  console.log(obj[key]); // 이때 배열방식이 아닌 .key로 하면 undefine이 출력된다.
}
printValue(ellie, "name");

// 3. Property value shorthand
const person1 = { name: "Bob", age: 4 };
const person2 = { name: "Steve", age: 8 };
const person3 = { name: "Tom", age: 2 };
const person4 = makePerson("James", 11);
const person5 = new Person("Joe", 44);
function makePerson(name, age) {
  return {
    name: name, // 키이름과 키값의 명칭이 같다면 name: name; 을 name,으로 줄여 사용할 수 있다.
    age: age,
    // name,
    // age,
  };
}
console.log(person4, person5);

// 4. Constructor Function
// Class 가 추가되기 전 사용했던 class 방식의 object 생성법
function Person(name, age) {
  // this = {}; 생략되었다
  this.name = name;
  this.age = age;
  // return this; 생략되었다
}

// 5. 'in' operator: 오브젝트 안에 유무확인을 위해 사용
console.log("name" in Person);
console.log("sex" in Person);

// 6. for...in vs for...of
// for ( key in object )
console.clear();
for (const key in ellie) {
  console.log(key);
}

// for ( value of iterable )
let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (const value of array) {
  console.log(value);
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3,...])
const user1 = { name: "Ellie", age: 5 };
const user2 = user1;
user2.name = "coder";
console.log(user1);

// old cloning way
const user3 = {};
for (const key in user1) {
  user3[key] = user1[key];
}
user3.name = "Billy";
console.log(user3);
console.log(user1);

// new cloning way
// const user4 = {};
// Object.assign(user4, user1);
const user4 = Object.assign({}, user1);
user4.name = "Paul";
console.log(user4);
console.log(user1);

// another example
// 여러개의 오브젝트를 복제할 경우 뒤에 추가되는 오브젝트가 덮어씌우기 때문에
// color의 경우 뒤에 추가된 blue가 저장된다
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
