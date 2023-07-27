import { useRef, useState } from 'react';

// JSX 문법 작성 규칙
// 1. 태그는 반드시 닫는 태그를 가져야 한다. img, input 등 역시 <img />, <input /> 등과 같이 closing 처리를 해야 한다.
// 2. return () 안에 들어가는 태그는 반드시 최상위 태그 하나로 감싸져 있어야 한다. <></>와 같이 빈태그로 감싸도 된다.

const Body = () => {
  const number = 1;

  // 산술 표현식
  const numA = 10;
  const numB = 20;

  // 문자 표현식
  const strA = 'Hello';
  const strB = 'React!!';

  // 함수 내에서는 원시자료형(숫자, 문자, boolean, null, undefined) 외의 값을 사용할 수 없다

  // 객체를 사용하려면 접근 표기법을 이용해 값을 원시 자료형으로 바꿔줘야 한다.
  const objA = {
    a: 1,
    b: 2,
  };

  return (
    <div>
      <h1>Body</h1>
      <h2>{number}</h2>
      <p>calc : {numA + numB}</p>
      <p>string : {strA + strB}</p>
      <p>
        Object Data : a = {objA.a}, b = {objA.b}
      </p>
    </div>
  );
};

export default Body;
