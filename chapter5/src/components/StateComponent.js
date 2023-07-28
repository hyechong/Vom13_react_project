import React from 'react';
import { useState } from 'react';

// 리액트의 state는 특정한 화면의 상태가 변할 때 변하는 조건을 지정한다.
// state는 useState로 생성한다.
// const [state, setState] = useState('default state')
// state : 현재의 상태를 저장하고 있는 값
// setState : 상태의 변경 내용을 저장하고 있는 값
// default state : 상태의 초깃값

// 리액트에서는 상태가 변경하는 것을 '컴포넌트 업데이트'라 한다.

const StateComponent = () => {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>StateComponent</h2>
      <p>{number}</p>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default StateComponent;
