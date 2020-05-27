"use strict";

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function Declaration
// function name (param1, param2, ...) { body... return; }
// one function === do one thing
// naming : doSomething, command, verb
// e.g) createCardAndPoint ==> createCard() + createPoint() 처럼 한가지 액션만 하는게 바람직.
// function 은 자바스크립트에서 object 타입이다.

function printHello() {
  console.log("Hello!");
}
printHello();

function log(message) {
  console.log(`${message}`);
}
log("This is from log().");

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "eliie" };
changeName(ellie);
console.log(ellie);

// 3. Default Parameters : added in ES6
function showMessage(message, from = "default value") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest Parameters : added in ES6
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg)); // 배열의 forEach function을 사용
}
printAll("joe", "tom", "cat", "dog");

// 5. Local Scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "Hello!"; // local variable
  console.log(message);
  console.log(globalMessage);
  return undefined;
}
printMessage();

sum(1, 2); // function hoisting : 함수선언 이전에 호출하는 것을 뜻함. js엔진이 선언된 변수들을 최상위로 올리기때문
// 6. return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. early return, early exit 을 해라 했을 때,
// 아래는 안좋은 사용 예
function upgradeUser(user) {
  if (user.point > 0) {
    // long upgrade logic...
  }
}

// 아래는 좋은 사용 예
// 조건문 사용 시, 조건이 충족되지 않는 경우 리턴을 함으로써
// 불필요한 로직 실행을 최소화 한다.
function upgradeUser2(user2) {
  if (user.point <= 0) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// function 은 기타 다른 변수의 형태들처럼 사용된다.
// 변수의 값으로써 사용될 수 있다.
// 다른 function 의 parameter로 사용될 수 있다.
// 리턴될 수 있다.
// function expression
// function을 선언할 때 변수에 치환시킬 수 있다.
const print = function () {
  // 함수의 이름이 없는 것을 anonymous function이라 한다.
  console.log("print"); // 이름을 부여하면 named function이라고 한다.
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2, 3));

// 8. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("Yes!");
};
// named function 은 디버깅시 함수의 이름을 식별할 때 좋다.
// 가급적 anonymouse function보다는 named function 형식으로 사용하라.
// recursion : n 이라는 함수 안에서 n 함수를 호출하여 무한반복하는 것을 의미.
// recursion은 특정 테스트를 할 때 쓰인다.
const printNo = function print() {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function : 항상 anonymous function 만 사용가능하다.
const simplePrint = function () {
  console.log("simplePrint");
};
const simplePrint2 = () => console.log("simplePrint in arrow function");
const add = (a, b) => a + b;
const simpleMutiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE : Immediately Invoked Function Expression
// 함수를 선언과 동시에 실행시킬 경우, 괄호를 쌓아준 후 ()로 함수실행.
(function hello() {
  console.log("IIFE");
})();

// QUIZ.
// function calculate(command, a, b)
// command : add, subtract, divide, multiply, remainder
const my_add = (a, b) => a + b;
const my_subtract = (a, b) => a - b;
const my_divide = (a, b) => a / b;
const my_multiply = (a, b) => a * b;
const my_remainder = (a, b) => a % b;

function my_cal(cmd, a, b) {
  switch (cmd) {
    case "add":
      console.log(my_add(a, b));
      break;
    case "subtract":
      console.log(my_subtract(a, b));
      break;
    case "divide":
      console.log(my_divide(a, b));
      break;
    case "multiply":
      console.log(my_multiply(a, b));
      break;
    case "remainder":
      console.log(my_remainder(a, b));
      break;
    default:
      throw Error("unknow command!");
  }
}

my_cal("add", 2, 10);
my_cal("subtract", 2, 10);
my_cal("divide", 10, 2);
my_cal("multiply", 2, 10);
my_cal("remainder", 10, 2);
my_cal("reminder", 10, 2);
