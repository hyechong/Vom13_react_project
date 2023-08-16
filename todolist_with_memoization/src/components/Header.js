import React from 'react';

// rm1. header 컴포넌트는 항상 고정된 상태이기 때문에 매번 리렌더 될 필요가 없다.
const Header = () => {
  // rm2. header가 리렌더 되는지 console로 확인한다.
  console.log('header update');
  return (
    <div className='Header'>
      <h3>오늘은 🗒️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// rm3. 리렌더를 방지하기 위해 header를 React.memo로 감싼다.
// export default Header; -> TodoItem.js
export default React.memo(Header);
