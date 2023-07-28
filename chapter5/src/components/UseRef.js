import React from 'react';
import { useState, useRef } from 'react';

const UseRef = () => {
  const [text, setText] = useState('');
  const textRef = useRef();
  // useRef의 인수로 전달한 값을 초깃값으로 객체 생성하여 저장

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    alert(text);
    textRef.current.value = '';
  };
  return (
    <div>
      <h2>UseRef</h2>
      <input type='text' onChange={onChangeText} value={text} ref={textRef} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRef;
