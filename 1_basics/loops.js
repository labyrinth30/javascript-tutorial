/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i=i+8){
    console.log(i);
}
console.log('------------------');
for (let i = 10; i > 0; i--){
    console.log(i);
}
console.log('------------------');

for (let i = 0; i < 3; i++){
    for (let j = 0; j< 3; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}
console.log('------------------');
for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}
console.log('------------------');
let square = '';
let side = 6;
for (let i = 0; i<side; i++){
    for(let j=0; j<side; j++){
        square += '*';
    }
    square += '\n';
}
console.log(square);

/**
 * for...in
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}

for(let key in yuJin){
    console.log(yuJin[key]);
}

const iveMembersArray = [
    '안유진', '가을', '장원영', '레이' , '리즈','이서',
]
console.log('------------------');
for(let index in iveMembersArray){
    console.log(index, iveMembersArray[index]);    
}

/**
 * for...of
 */
console.log('------------------');
for(let member of iveMembersArray){
    console.log(member);
}

/**
 * While
 */

let number = 0;

while(number < 10){
    number++;
    console.log(number);
}

/**
 * do...while
 */
 
let i = 0;
do{
    i++;
} while(i < 10);

console.log(number);

/**
 * break
 */
console.log('------------------');

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

/**
 * continue
 */
console.log('------------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}