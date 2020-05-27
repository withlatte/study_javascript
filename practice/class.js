"use strict";
// Object-oriented programming
// class: template
// object: instance of class
// Javascript classes
// - introduced in ES6
// - Syntactical sugar over prototype-based inheritance

// 1. Class declaraions
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // method
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

const me = new Person("janghyun", 44);
console.log(me.name);
console.log(me.age);
me.speak();

// 2. Getter & Setter
// 변수를 설정하는 기능. 주로 변수의 초기값을 설정할 때 쓴다
console.log("#########");
class User {
  constructor(first_name, last_name, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
  get age() {
    // GETTER
    // _를 붙혀 동일이름 사용 시 발생하는 무한 반복을 방지한다
    return this._age;
  }
  set age(value) {
    // SETTER
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
// getter,setter에서 _age를 사용하였으나, 이는 클래스 내부처리 과정이므로
// 호출 시에는 기존 변수이름을 사용한다
console.log(user1.age);

// 3. Fields : public, private
// ECMA Script에 추가된 지 얼마 안되어 아직 사용하기 이르다
// 사용을 위해서는 Babel을 이용한 downgrade가 필요하다. MDN 싸이트를 참고하자
class Experiment {
  publicField = 2;
  #privateField = 20; // 변수 앞에 샵(#)을 붙힌다
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

console.log("#########");
// 4. Static properties and methods
// 이것도 추가된지 얼마 안됨
class Article {
  static publisher = "Jang Hyun";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article();
const article2 = new Article();
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

console.log("#########");

// Inheritance
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
const shape = new Shape(10, 20, "blue");
shape.draw();
console.log(shape.getArea());

class Rectangle extends Shape {}
class Triangle extends Shape {
  getArea() {
    return (this.width * this.height) / 2;
  }
  draw() {
    super.draw();
    console.log("🔺");
  }
  toString() {
    return "This is from toString";
  }
}
const rect = new Rectangle(5, 3, "yellow");
console.log(rect.getArea());
const tria = new Triangle(3, 3, "green");
rect.draw();
console.log(tria.getArea());
tria.draw();
console.log("#########");

// 6. Class Checking Tool : instanceof
console.log(rect instanceof Rectangle);
console.log(tria instanceof Rectangle);
console.log(tria instanceof Triangle);
console.log(tria instanceof Shape);
console.log(tria instanceof Object);
console.log(tria.toString());
console.log("#########");
