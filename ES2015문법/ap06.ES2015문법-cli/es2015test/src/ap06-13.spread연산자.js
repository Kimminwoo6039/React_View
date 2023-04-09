/*

  스프레드 사용법을 학습한다.

  ES 5에서는
  arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array  메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

  ES2015 에서는
  rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

  Spread 연산자는 ... 이다.
    이터러블(iterable) 객체를 "개별" 요소로 분리
    이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
    iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

const cites = ['서울', '부산', '제주'];
console.log(cites[0], cites[1], cites[2]); /// 서울부산제주
console.log(...cites); /// 서울부산제주

const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];

// east 와 west 를 결합하여 배열을 만드시오
const countries = [].concat(east).concat(west);
console.log(countries);

const countries2 = [...east, ...west];
console.log(countries2);

const lakes = ['경포호', '화진포', '송지호', '청초호'];
const [first, ...rest] = lakes;
console.log([first, ...rest]);
console.log(first);
console.log(rest);

/// rest 연산자 = spread 연산자
const [city1, ...cityrest] = [...east, ...west];
console.log(cityrest);

const moring = {
  breacfast: '미역국',
  lunch: '삼치구이',
};

const dinner = '스테이크';

const mealse = {
  ...moring,
  dinner,
};

console.log(mealse);

function childComponet(...props) {
  console.log(props);
}

const message = 'passd';
childComponet(...message);
