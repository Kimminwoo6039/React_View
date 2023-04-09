"use strict";

/*

  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 다중 문자열 만들 때
  2. 변수 치환
*/

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greenting = "".concat(string1, "  ").concat(string2);
console.log(greenting);
var value1 = 1;
var value2 = 2;
var value3 = value1 * value2;
var value4 = value2 ? '참' : '거짓';
var oper1 = "\uACF1\uC149\uAC12\uC740 ".concat(value3, " \uC785\uB2C8\uB2E4");
var student = {
  name: 'jone',
  city: 'Kampala'
};

// es5

var message1 = "Hello " + student.name + " from " + student.city;
console.log(message1);

// Es2015
var message2 = "Hello ".concat(student.name, " from ").concat(student.city);
console.log(message2);