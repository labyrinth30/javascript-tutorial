/**
 * Hoisting
 */

console.log('Hello');
console.log('World');

console.log('--------------------');

// console.log(name); // undefined
// var name = '이윤하';
// console.log(name);

// var name;
// console.log(name); // undefined
// name = '이윤하';
// console.log(name);

/**
 * Hoisting이란?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// console.log(yuJin); // Cannot access 'yuJin' before initialization
// let yuJin = '안유진'; // let은 값이 할당되기 전까지 변수를 참조할 수 없다.

console.log('--------------------');
console.log(wonYoung);
const wonYoung = '장원영'; // const도 let과 마찬가지로 hoisting이 발생한다.
