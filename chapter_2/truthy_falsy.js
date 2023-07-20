// truthy & falsy : 불리언 자료형의 true, false으로 평가되지는 않지만, 이들과 같은 의미로 쓰이는 평가 조건식을 말함.

// undefined, null은 falsy
let varA;
if (varA) {
  console.log('truthy');
} else {
  console.log('falsy');
} // falsy

// 0, -0, NaN을 제외한 모든 값을 truthy
const num = -0;
if (num) {
  console.log('truthy');
} else {
  console.log('falsy');
}

// 단락 평가
let person = { name: 'marshall' };
// api 받을 때 받는 데이터를 확인 : 여러 종류의 데이터가 들어오면, 평가를 해줘야 한다. (예외처리)
// 단락평가 리팩토링 chat GPT로 한다. <- 결과를 반드시 분석해야한다**

// let person = 'marshall';
function getName(person) {
  if (person !== undefined) {
    return person;
  } else {
    return person.name;
  }
}

function getName1(person) {
  return person && person.name;
}

let printName = getName(person);
let printName1 = getName1(person);

console.log(printName); // 매개변수에 person을 입력하면 undefined값 출력
console.log(printName1); // person이 객체여도 person만 입력하면 이름이 출력됨
