// Object.keys는 객체의 키를 배열로 리턴
let person = {
  name: 'marshall',
  age: 25,
};

const keyArray = Object.keys(person);
console.log(keyArray);

// key의 값을 반환하려면 배열 메서드로 읽어야 함
for (let key of keyArray) {
  console.log(key);
}

keyArray.forEach((key) => {
  console.log(key);
});

// key의 값을 반환하려면 Object.values를 사용한다.
const valueArray = Object.values(person);
valueArray.forEach((val) => {
  console.log(val);
});
