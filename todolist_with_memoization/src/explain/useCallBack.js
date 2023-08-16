// 함수 재생성 방지

// import { useCallback, useState } from 'react';

// const memoizedFunc = useCallback(func, deps)
// func : 메모이제이션 하려는 콜백 함수를 전달
// deps : 의존성 배열

// 의존성 배열에 담긴 값이 바뀌면 첫 번째 인수로 전달한 콜백 함수를 다시 만들어 반환.
// 만약 첫 번재 인수로 전달한 콜백 함수를 어떤 경우에도 생성되지 않게 하려면 [] 빈 비열 전달

// useCallback의 첫 번째 인수로 전달한 콜백 함수에서 state 변수에 접근하는 경우 문제가 발생한다.

// const onCreate = useCallback(() => {
//   setState([newItem, ...state]);
// }, []);

// 이 경우 useCallback에서 전달한 콜백 함수에서 state 변수에 접근하면 컴포넌트를 마운트 할 때의 값, 즉 state의 초기값이 반환된다. 즉 마운트 할 때의 state 값만 사용할 수 있다.
// useCallback으로 래핑된 함수 onCreate는 state의 변화를 추적하지 못한다.

// 이때는 다음과 같이 setState의 인수로 콜백 함수를 전달하면 된다.

// const onCreate = useCallback(() => {
//   setState((state) => [newItem, ...state]);
// }, []);

// 이 경우 state는 항상 최신 state 값을 매개변수로 저장한다. 이후 콜백 함수가 반환한 값은 새로운 state 값이 되어 업데이트 된다. -> App.js
