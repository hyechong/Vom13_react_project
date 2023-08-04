import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState, useEffect, useRef } from 'react';

// 리액트 라이프 사이클
// 1. 마운트 : 컴포넌트를 페이지에 처음 랜더링 할 때
// 2. 업데이트 : state나 props의 값이 바뀌거나 부모 컴포넌트가 리랜더해 자신도 리랜더 될 때
// 3. 언마운트 : 더 이상 페이지에 컴포넌트를 랜더링하지 않을 때

// useEffect : 어떤 값이 변경될 때마다 특정 코드를 실행하는 리액트 훅
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log('count update:', count, text);
  // }, [count, text]);

  // const didMountRef = useRef(false);

  // useEffect(() => {
  //   // console.log('count mount update');
  //   console.log(didMountRef.current);
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log('count mount update');
  //   }
  // });
  // 1. 조건문에서 didMountRef를 검사
  // 2. 초깃값이 false이고, 처음 랜더링하는 마운트 시점에서는 true가 되어 if문 실행
  // 3. didMountRef의 값을 true로 바꾸고 함수 종료(return)
  // 4. 한 번 더 클릭하면 didMountRef가 true로 바뀐 상태이므로 콘솔이 표시됨

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log('blink');
  //   }, 1000);

  //   return () => {
  //     clearInterval(intervalID);
  //   };
  // });
  // 버튼을 클릭할 때마다 인터벌 속도가 증가한다.
  // 1. 컴포넌트를 랜더링 할 때마다 useEffect의 콜백 함수는 새로운 setInterval 함수를 만들고 새 인터벌을 생성하기 때문
  // 2. setInterval을 생성한 다음에 이를 종료하지 않기 때문
  // 위의 경우 사용하는 개념이 클린업이다.

  const handleSetCount = (value) => {
    setCount(count + value);
    // console.log(count);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} type='text' />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
