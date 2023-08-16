import React from 'react';

// 고차 컴포넌트는 인수로 전달된 컴포넌트를 새로운 컴포넌트로 반환한다.
// 다만 어떤 기능을 추가해 반환한다. 이를 강화된 컴포넌트라 한다.
// const EnhancedComponent = withFunc(comp);

/******** 횡단 관심사 *********/
// 프로그래밍에서 비즈니스 로직과 구분되는 공통 기능을 지칭할 때 사용되는 용어다.
// 즉, 여러 핵심 기능을 실행할 때 각 기능 실행 시 공통으로 실행되는 기능을 말한다. 369p 참조
// 고차 컴포넌트에 인수로 전달된 컴포넌트를 '래핑된 컴포넌트'라 한고, 고차 컴포넌트가 반환하는 컴포넌트를 '강화된 컴포넌트'라 한다.

// React.memo는 컴포넌트가 모든 상황에서 리렌더되지 않도록 강화함으로써 서비스를 최적화 하는 도구이다.
// 사용법은 강화하고 싶은 컴포넌트를 React.memo로 감싸면 된다.

// const momoizedComp = React.memo(Comp);

// 다음과 같이 함수 컴포넌트를 선언함과 동시에 메모이제이션 하는 것고 가능하다.

const CompA = React.memo(() => {
  console.log('call component');
  return <div>CompA</div>;
});

// React.memo는 props의 변경 여부를 기준으로 컴포넌트의 리렌더 여부를 결정한다.
// 만약 props로 전달되는 값이 많을 때는 다음과 같이 판별 함수를 인수로 전달해 props의 특정 값만으로 리렌더 여부를 판단할 수 있다.

const comp = ({ a, b, c }) => {
  console.log('call component');
  return <div>Comp</div>;
};

function areEqual(prevProps, nextProps) {
  if (prevProps.a === nextProps.a) {
    return true;
  } else {
    return false;
  }
}

const MemoizedComp = React.memo(comp, areEqual); // 두 번째 인수로 판별 함수 areEqual을 전달한다. 그 결과로 반환되는 MemoizedComp는 전달되는 props의 값 중 a가 변경 될 때만 리렌더 된다. -> header.js
