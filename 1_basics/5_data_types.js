/**
 * Data Types
 * 
 * 6개의 Primitive Type
 * 1개의 Object Type
 * 
 * 1) number (숫자)
 * 2) String (문자열)
 * 3) boolean (참/거짓)
 * 4) undefined (정의되지 않음)
 * 5) null (널)
 * 6) Symbol (ES6에 추가됨)
 * 
 * 7) Object (객체)
 *    Function (함수)
 *    Array (배열)
 */

// 1. number
const age = 20;
const temperature = -10;
const pi = 3.14;
console.log(typeof age, typeof temperature, typeof pi);
console.log('------------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity, typeof nInfinity);
console.log('------------------');

// String
const name = '홍길동';
console.log(typeof name);
const message = 'He said "Hello"';
console.log(message);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline - \n
 * 2) tab - \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력 - \\
 */
const iveYujin = '아이브\n안유진'
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung); 
const backSlash = '아이브\\이윤하';
console.log(backSlash);
const smallQutoation = '아이브\'조유리';
console.log(smallQutoation);

// Template Literal
const iveWonYoung2 = `아이브 '"\'
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + '는 6인조 걸그룹입니다.');
console.log(`${groupName}는 6인조 걸그룹입니다.`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue, typeof isFalse);

/**
 * undefined 타입
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined를 할당하는 것은 좋지 않다.
 */
let firstName;
console.log(firstName);
console.log(typeof firstName);

/**
 * null 타입
 * 
 * 값이 없음을 의미
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용된다.
 */
const lastName = null;
console.log(lastName);
console.log(typeof lastName);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를
 * 호출하여 생성한다.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 * 
 * Map
 * 키:밸류의 쌍으로 이루어져있다.
 */
const dictionary = {
    'apple': '사과',
    'banana': '바나나',
    'grape': '포도'
};
console.log(dictionary);

// 키를 통해 값을 가져올 수 있다.
console.log(dictionary.apple);
console.log(dictionary['apple']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 List로 나열할 수 있는 타입
 */

const iveMembersArray = ['유진', '원영', '가을', '레이', '리즈', '이서',];
console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 시작하여 1씩 올라간다.
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);
iveMembersArray[5] = '이윤하';
console.log(iveMembersArray[5]);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 타입을 명시 (C, Java)
 * dynamic typing -> 변수를 선언할 때 타입을 명시하지 않아 추론한다. (JS, Dart)
 */