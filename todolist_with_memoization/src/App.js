import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useReducer, useRef, useCallback } from 'react';
import reducer from './reducer/reducer';

// 리액트 연산 최적화는 대부분 memoization 기법을 사용한다.
// 이는 특정 입력에 대한 결과를 계산해 메모리 어딘가에 저장했다가, 동일한 요청이 들어오면 저장한 결과값을 제공하는 기능이다.
// 따라서 매번 요청이 들어올 때마다 불필요한 연산을 최소화 시키며, 속도가 빨라지게 된다.
// 리액트에서 최적화를 위해 사용하는 기능으로 useMemo가 있다.

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래널기',
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  // uc1. onUpdate 함수를 useCallback으로 전환
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  // uc2. onDelete 함수를 useCallback으로 전환
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);

  // uc3. state 관리도구로 useState가 아닌 useReducer를 이용할 때는 함수형 업데이트를 사용하지 않아도 된다.
  // uc4. 따라서 TodoItem 컴포넌트에 함수로 전달되는 Props인 onUpdate와 onDelete만 다시 생성되자 않도록 useCallback을 이용해 최적화 한다.

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
