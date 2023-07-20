// 배열을 편집할 수 있는 메서드

// push : 배열 끝에 요소를 추가하고, 새로운 배열을 만든다.
let letters = ['a', 'b', 'c', 'd'];
// letters.push('e', 'f');
let newLetters = letters.push('e', 'f');

console.log(letters);
console.log(newLetters); // 추가된 요소를 변수에 저장하여 읽으면 갯수가 리턴된다.

// pop : 배열의 끝 요소를 제거한 후 새로운 배열을 만든다.
let numbers = [1, 2, 3, 4, 5];
// numbers.pop();
let removedItem = numbers.pop();

console.log(numbers);
console.log(removedItem); // 삭제된 요소를 변수에 저장하여 읽으면 삭제된 요소가 리턴된다.

// shift : 배열의 맨 앞 요소를 제거하고 새로운 배열을 만든다.

let krLetters = ['가', '나', '다', '라'];
// krLetters.shift();
let removedItemKrLetters = krLetters.shift();

console.log(krLetters);
console.log(removedItemKrLetters); // 변수에 저장하면 삭제된 요소가 반환된다.

krLetters.unshift('마');
let addItemKrLetters = krLetters.unshift('마');
console.log(krLetters);
console.log(addItemKrLetters); // 변수에 저장하면 추가된 이후의 요소 갯수를 반환한다.
// shift, unshift는 배열의 0번째 요소를 편집하게 된다. 이렇게 되면 나머지 요소의 인덱스가 모두 달라져야 한다. 따라서 수만 개 요소를 가진 배열의 경우 성능이 많이 떨어지게 된다.

// slice : 특정 범위의 배열 요소를 삭제하고 원본은 유지한다.
// array.slice(start, end)
// start : 삭제를 시작할 배열의 인덱스
// end : 삭제할 마지막 요소 이후 인덱스
let sliceArray = [1, 2, 3, 4, 5, 6, 7];
let slicedArray = sliceArray.slice(1, 3);

console.log(sliceArray); // 원본이 유지된다.
console.log(slicedArray);

let minus6Slice = sliceArray.slice(-6); // 뒤에서 6번째 인덱스를 삭제하고 나머지를 반환
let minus1Slice = sliceArray.slice(-1); // 뒤에서 1번째 인덱스를 삭제하고 나머지를 반환
console.log(minus6Slice);
console.log(minus1Slice);

// concat : 두 개의 배열을 붙여서 새로운 배열을 반환한다. 원본은 유지된다.
let arrayA = [1, 2, 3];
let arrayB = [4, 5];

let arrayC = arrayA.concat(arrayB);
console.log(arrayC);
console.log(arrayA); // 원본은 유지된다.

// indexOf : 배열 요소 중 찾으려는 요소의 인덱스를 반환한다.
// array.indexOf(item, fromIndex)
// item : 찾으려는 요소
// fromIndex : 탐색을 시작할 인덱스
let indexOfArray = [1, 2, 3, 4, 2];
console.log(indexOfArray.indexOf(2, 0)); // 1 : 2라는 요소가 1번째 인덱스에 있음
console.log(indexOfArray.indexOf(1, 2)); // -1 : 1이라는 요소는 2번 인덱스 이후에 없음
console.log(indexOfArray.indexOf(2, -1)); // 4 : 2라는 요소는 뒤에서 4번 인덱스에 있음
console.log(indexOfArray.indexOf(2)); // 1 : 2라는 요소는 0번 인덱스 이후 1번 인덱스에 있음. 그 이후 2번은 무시
// indexOf는 type을 비교하는 메서드여서 '2'처럼 문자열 숫자는 실제 숫자와 다르다고 판단

// find : 찾으려는 요소를 콜백 함수의 인수로 담아 반환한다.
let findArray = ['a', 'c', 'd', 'e', 'f'];

let elmtA = findArray.find((item) => item === 'a');
let elmtB = findArray.find((item) => item === 'b');
console.log(elmtA);
console.log(elmtB); // undefined
console.log(findArray); // 원본 유지

// filter : 배열에서 특정 조건을 만족하는 요소만 모아 새로운 배열을 반환한다.
let filterArray = [
  { name: 'marshall', class: 'A' },
  { name: 'john doe', class: 'B' },
  { name: 'jane doe', class: 'C' },
  { name: 'tom doe', class: 'A' },
];

let filteredArray = filterArray.filter((item) => item.class === 'A');
console.log(filteredArray);
console.log(filterArray); // 원본 유지

// sort : 배열의 순서를 정렬한다.
let sortArray = [1, 7, 3, 2, 9];
let sortedArray = sortArray.sort((a, b) => a - b);
console.log(sortedArray);

// 두 개의 숫자를 각 경우의 수를 두고 a, b에 대응한다.
// a - b가 0보다 크면 b, a순서로 정렬한다. 0보다 작으면 a, b 순서로 정렬한다.
// 1과 7을 비교한다. : 1 - 7 = -6 => 0보다 작음 => [1, 7, 3, 2, 9]
// 7과 3을 비교 : 7 - 3 = 4 => 0보다 큼 => [1, 3, 7, 2, 9]
// 7과 2을 비교 : 7 - 2 = 5 => 0보다 큼 => [1, 3, 2, 7, 9]
// 3과 2를 비교 : 3 - 2 = 1 => 0보다 큼 => [1, 2, 3, 7, 9]
// 7과 9를 비교 : 7 - 9 = -2 => 0보다 작음 => [1, 2, 3, 7, 9]
