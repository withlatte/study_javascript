"use strict";

/** JSON (Java Script Object Notation)
 * 데이타를 주고받을때 쓸 수 있는 가장 간단한 포맷이다
 * 텍스트 기반의 가벼운 구조이며 가독성이 뛰어나다
 * 자바스크립트의 오브젝트 구조와 동일하게 키와 밸류 로 쌍으로 구성되어 있다
 * 데이타를 서버와 주고 받을 때 serialization(직렬화)을 위하여 사용한다
 * 어떤 프로그램 언어와도 호환된다 ✔
 * serialize / deserialize
 */

// 1. Object to Json
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "melone"]);
console.log(typeof json, json);

const rabbit = {
  name: "Tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} is jumping!`);
  },
};
json = JSON.stringify(rabbit);
console.log(typeof json, json);
json = JSON.stringify(rabbit, ["name"]);
console.log(typeof json, json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(typeof json, json);
console.clear();

// 2. Json to Object
// parse(json)
json = JSON.stringify(rabbit);
const obje = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? (value = new Date()) : value;
});
console.log(obje);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
console.log(obje.birthDate);
console.log(obje.birthDate.getDate());
