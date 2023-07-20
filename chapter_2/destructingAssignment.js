// 구조분해할당 : 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담는다.

// 배열 구조분해할당**
let arr = [1, 2, 3];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
let [one, two, three] = arr;
// let [one, two] = arr; // 3:three는 저장 안됨 - 오류아님
console.log(one);

// 객체 구조분해할당**
let person = {
  name: 'marshall',
  age: 25,
  loca: 'Incheon',
};

let { name, age, loca } = person;
console.log(name, age, loca);

// 객체를 함수의 매개변수로 전달
function objectParam({ name, age, loca }) {
  console.log(name, age, loca);
}

objectParam(person);
