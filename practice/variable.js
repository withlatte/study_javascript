"use strict";
console.log(`Hello World!`);
console.log("Ok");
console.log("very fun");
console.log("aaaaaaa");

let name = "jang hyun";
console.log(name);
name = "bl7ixo";
console.log(name);

// Dynamic typing : dinamically typed language
// 자바스크립트는 변수의 타입을 선언하여 사용하는 일반적인 방식 외에도, 다이나믹하게 사용하는 방식이 존재한다.
// 변수의 형식을 미리 선언하고 사용하는 것이 아니라, 필요할때 어떤 형식으로든 사용하게 하는 것.
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" / "5";
console.log(`value: ${text}, type: ${typeof text}`);

// mutable variables : 변동성 변수 read/write
let item = 0;

// immutable variable : 불변 변수 read only
const numWeekdays = 7;

// Types of variables
// primitive 타입 - single item : number, string, boolean, null, undefined, symbol
// object 타입 - box container
// function 타입 - first-class function
// 자바스크립트는 function도 타입에 속하며, return(반환) 시. function을 반환할 수 있다.

const count = 17;
const size = 15.3;
console.log(`VALUES && TYPES`);
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, negative-infinity, NAN=not a number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const non = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(non);

// number - bigint : 최근에 추가된 type of number 큰 숫자를 선언할때 사용된다. 지금은 사파리나 크롬에서만 지원됨
// 숫자 끝에 n 을 붙힌다.
const big_number = 1234567890123456789012345678901234567890n;
console.log(`value: ${big_number}, type: ${typeof big_number}`);

// string
const char = "c";
const brendan = "brandan";
const greeting = "Hello " + brendan + "!";
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `Hi ${brendan}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, ''
// true : any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let v;
console.log(`value: ${v}, type: ${typeof v}`);

// symbol
// 심볼타입은 변수에 고유한 표식을 해주는 기능이며, 아래처럼 동일한 스트링값을 선언하더라도
// 달리 취급되어진다. 동일한 값으로 취급하되, 표식만 달리 사용하기 위해서는 Symbol.for를 사용하여
// 선언하고, 심볼의 값을 사용하기 위해서는 심볼명 뒤에 description을 붙혀 사용해야 한다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 == symbol2);
const gsymbol1 = Symbol.for("idd");
const gsymbol2 = Symbol.for("idd");
console.log(gsymbol1 == gsymbol2);
console.log(`value: ${symbol2.description}, type: ${typeof symbol2}`);

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.name = "joe";
ellie.age = 21;
// 위의 ellie에 대한 선언은 ellie라는 변수는 변동불가 imutable value이지만, 그 안에
// 정의된 name과 age에 대한 값은 변경이 가능하다라고 풀이된다.
