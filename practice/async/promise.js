"use strict";

// Promise is JavaScript object for asycronous operation.
// state(상태) : 프로세스가 헤비한 오퍼레이션을 수행하는 중인지 또는,
// 완료가 성공한 상태인지 실패한 상태인지 체크
// state는 pending(대기중) -> fulfilled(완료) 또는 rejected(실패)
// Producer & Consumer : 필요한 데이터를 제공한 사람과 필요로 하는 사람(사용하는 사람)

// 1. Producer : resolve 와 reject 두개의 콜백함수를 요한다.
// Promise class가 생성되는 순간 클라스 안의 executor(실행함수)가 자동으로 실행된다
// 고로, 사용자가 버튼등을 눌러 요청을 하는 경우에만 함수실행이 필요한 경우 사용시 불필요한 렉을 불러온다
const promise = new Promise((resolve, reject) => {
  // promise 클래스 안에는 주로 heavy한 프로세스들을 처리한다
  // 무거운 프로세스들을 동기적(동시로딩)으로 처리하면 렉 발생
  // 고로, network나 file들을 불러올때 비동기적(별도로 로딩)으로 처리하는게 바람직
  console.log("doing something...");
  setTimeout(() => {
    resolve("Joseph");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumer: then, catch, finally => 위에 만들어진 Promise class 사용하기
promise
  .then((value) => {
    // 위의 value는 promise의 resolve에서 받아온 인자 즉, Joseph이다
    // then()은 promise가 성공적으로 수행이되면 resolve에서 인자를 받아와 수행하는 함수이다.
    console.log(value);
  })
  .catch((error) => {
    //   catch는 promise의 executor가 실패할 경우 에러메세지를 reject에서 전달받아 실행된다
    console.log(error);
  })
  .finally(() => {
    //   finally는 promise의 수행 성공여부에 상관없이 마지막에 무조건 실행되는 함수
    console.log("finally is executed!");
  });

//   3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      return resolve(num - 1), 1000;
    });
  })
  .then((num) => console.log(num));

//   4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🐓`), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`ERROR! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍥`), 1000);
  });
getHen() //
  //   .then((hen) => getEgg(hen))
  //   .then((egg) => cook(egg))
  //   .then((meal) => console.log(meal));
  // 함수에 불러오는 인자(hen)와 콜백함수(getEgg)에서 사용할 인자(hen)가 동일할 경우,
  // 그리고, 인자가 한개만 존재할 경우, 위를 아래와 같이 단축시켜서 코딩이 가능하다.
  .then(getEgg)
  // 특정 Error 처리를 위해 원하는 곳에 위치한 then 바로 밑에 catch를 위치 시킨다
  .catch((error) => {
    return "🍧";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
