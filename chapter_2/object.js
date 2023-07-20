// 배열은 객체 자료형에 몇 가지 기능을 추가해 다른 언어의 배열처럼 동작하는 특수 객체
// 함수는 이름을 저장하는 name 프로퍼티가 있음

function myFunction() {
  console.log('hi');
}

console.log(myFunction); // 함수 자체를 문자열로 리턴
console.log(myFunction.name); // 함수 이름을 문자열로 리턴

// 원시 자료형은 값을 변수 할당 공간에 직접 저장함.
// 객체 자료형은 특정 공간에 변수를 할당하고, 그 공간의 주소를 참조한다.
let person = {
  name: 'marshall',
};

let man = person; // 변수 person과 man은 같은 공간에 저장된 객체를 참조한다.
console.log(person);
console.log(man);
console.log(person === man); //true
