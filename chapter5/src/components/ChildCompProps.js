import React from 'react';
// 컴포넌트를 전달하기 위해서는 App 파일에 현재 컴포넌트(ComponentProps)에 닫는 태그를 만들고, 자식 태그로 전달 컴포넌트를 감싼다.
// 전달받은 컴포넌트 이름을 현재 컴포넌트 함수 파라미터의 'children' 값으로 전달받는다.
const ChildCompProps = ({ children }) => {
  console.log(children);
  return (
    <div>
      <h2>ChildCompProps</h2>
      <p>{children}</p>
    </div>
  );
};

export default ChildCompProps;
