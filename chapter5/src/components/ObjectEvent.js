import React from 'react';

// 이벤트가 발생하면 이벤트 핸들러에게 이벤트 객체를 매개변수로 전달한다.
// 이벤트 객체에는 어떤 요소에서 어떻게 이벤트가 발생했는지에 관한 정보가 담긴다.

const ObjectEvent = () => {
  const ObjectEventClick = (e) => {
    console.log(e);
    console.log(e.target.name);
  };
  return (
    <div>
      <h2>ObjectEvent</h2>
      <button name='A' onClick={ObjectEventClick}>
        ClickA
      </button>
      <button name='B' onClick={ObjectEventClick}>
        ClickB
      </button>
    </div>
  );
};

export default ObjectEvent;
