import React from 'react';

// 리액트 이벤트에서는 onclick 이 아니라 onClick으로 작성해야 한다.(카멜케이스)
// 이벤트 내용은 {} 안에 작성해야 한다.
// 전달되는 함수는 abc()와 같이 함수를 호출하는 방식이 아니라 abc와 같이 함수 자체를 전달해야 한다.

const AlertEvent = () => {
  const handleOnClick = () => {
    alert('clicked!;)');
  };
  return (
    <div>
      <h2>AlertEvent</h2>
      <button onClick={handleOnClick}>Click!</button>
    </div>
  );
};

export default AlertEvent;
