/**
 * 변수 선언하기
 * 1) var - 더 이상 사용하지 않는다.
 * 2) let - 변수 선언
 * 3) const - 상수 선언
 */

// var
var a = 1;
a = 2;
console.log(a);

// let
let b = 2;
b = 3;
console.log(b);

// const
const c = 3;
// c = 4; // TypeError: Assignment to constant variable.
console.log(c);


/**
 * 선언과 할당
 * 
 * 1) 선언 - 변수를 생성하는 것
 */

var name; // 변수 선언 
name = 'Mark'; // 할당
console.log(name);

let name2; // 변수 선언
console.log(name2); // undefinedss

//const name3; // SyntaxError: Missing initializer in const declaration