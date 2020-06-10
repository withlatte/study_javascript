"use strict";

// JavaScript is "Synchronous"
// Hoisting 된 이후부터 순차적으로 코드가 실행된다.
// 호이스팅이란 var 또는 function 선언이 우선 실행되어 대기하게 하는 것

console.log("1");

setTimeout(function () {
  // setTimeout 함수처럼 함수의 실행(즉, 콜백) 순서를 바꿔주는 것을 비동기적 async 함수라 한다
  console.log("2");
}, 1000);
setTimeout(() => console.log("5"), 500);
console.log("3");

// Synchronous callback : 불러온 함수(콜백함수)를 즉시 실행시킨다.
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("Hello!"));

// Asyncronous callback : 불러온 함수를 인터벌을 두고 실행시킨다.
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("안녕안녕"), 1000);

// callback 지옥 예제 : 엉망인 코드를 고쳐나가는 식으로 알려줄 것
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error(`${id} is not found`));
      }
    }, 1000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "엘리", role: "관리자" });
      } else {
        onError(new Error(`access denied`));
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = prompt("username : ");
const password = prompt("password : ");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        console.log(userWithRole.name, userWithRole.role);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
