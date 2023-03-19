/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열 만들 때
  2. 변수 치환
*/

const string1 = '안녕하세요';
const string2 = '반갑습니다';

const greenting = `${string1}  ${string2}`;

console.log(greenting);

const value1 = 1;
const value2 = 2;
const value3 = value1 * value2;
const value4 = value2 ? '참' : '거짓';
const oper1 = `곱셉값은 ${value3} 입니다`;

const student = {
  name: 'jone',
  city: 'Kampala',
};

// es5

const message1 = `Hello ` + student.name + ` from ` + student.city;
console.log(message1);

// Es2015
let message2 = `Hello ${student.name} from ${student.city}`;
console.log(message2);
