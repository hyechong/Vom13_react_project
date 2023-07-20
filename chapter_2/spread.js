// 전개 연산자를 사용하면, 배열, 문자열, 객체 등과 같이 반복이 가능한 객체의 값을 개별 요소로 분리해서 사용할 수 있다.

// 배열에서의 전개 연산자
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

// 객체에서의 전개 연산자
let objA = {
  a: 1,
  b: 2,
};

let objB = {
  ...objA,
  c: 3,
};

console.log(objB);

// 함수에서의 전개 연산자
function spread(a, b, c) {
  console.log(a, b, c);
}

let functionSpreadWithArray = [1, 2, 3];

spread(...functionSpreadWithArray);

// 구조분해할당은 하나의 매개변수가 적용되는 것이고 전개연산자는 여러개의 매개변수가 적용된다.

// 전개 연산자는 반복 가능한 값을 개별 요소로 분해하지만, 나머지 매개변수(rest)는 개별 요소를 배열로 묶는다.
function functionWithRest(...rest) {
  console.log(rest);
}

functionWithRest(1, 2, 3, 4);

// 나머지 매개변수에서 앞선 매개변수에 별도의 이름을 지정하면 뒷부분의 남은 매개변수가 rest로 저장된다.
function functionWithRestInName(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

functionWithRestInName(1, 2, 3, 4, 5);
