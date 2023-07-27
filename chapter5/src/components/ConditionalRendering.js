import React from 'react';

// 조건부 랜더링

// 1. 삼항 연산자 : 코드가 간결하지만 자주 사용할 경우 복잡해 보인다.
// 조건 결과값이 하나 이거나 짧을 경우 삼항 연산자 사용
// function ConditionalRendering() {
//   const num = 19;
//   return (
//     <>
//       <h2>
//         {num} = {num % 2 === 0 ? '짝수' : '홀수'};
//       </h2>
//     </>
//   );
// }

// 2. 조건문 : 작성할 코드량이 많고, 중복 코드가 자주 발생한다.

// 스타일을 적용 시 인라인을 이용할 경우 객체를 생성한 다음 스타일을 프로퍼티 형식으로 작성한다.
// 또한 문자의 연결은 카멜 표기법을 사용해야 한다. ex : backgroundColor
function ConditionalRendering() {
  const num = 19;
  if (num % 2 === 0) {
    return (
      <div style={{ backgroundColor: 'red', color: 'white' }}>
        {num}은(는) 짝수
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: 'red', color: '#fff' }}>
        {num}은(는) 홀수
      </div>
    );
  }
}

export default ConditionalRendering;
