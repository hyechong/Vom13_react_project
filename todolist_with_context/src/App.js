import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useReducer, useRef, useCallback, useMemo } from 'react';
import reducer from './reducer/reducer';
import React from 'react';

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

// 1. TodoContext 변수에 createContext를 저장한다.

// 7. 외부 파일에서 사용하기 위해 export 한다. -> TodoList.js
// export const TodoContext = React.createContext(); // context는 반드시 컴포넌트 밖에 생성해야 한다.

// 21. TodoStateContext와 TodoDispatchContext를 새로 만들기 위해 위 7번 context 로직을 삭제하고 새로 만든다.
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

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

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  }, []);

  // 23. todo가 변경되어 App 컴포넌트를 리렌더 하면 TodoDispatchContext.Provider에 props로 전달하는 3개의 함수를 다시 생성한다.
  // 따라서 useMemo를 이용해 TodoDispatchContext.Provider에 전달할 dispatch 함수를 다시 생성하지 않도록 해야 한다.

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, [onUpdate, onDelete]); // 초기 의존성 주입 : onCreate은 저장되지 않는 데이터가 새롭게 입력되므로 초기 의존성 값으로 넣으면 안됨

  return (
    <div className='App'>
      <Header />
      {/* 2. TodoContext가 포함해야 할 컴포넌트 TodoEditor와 TodoList 컴포넌트를 Provider로 감싼다 */}
      {/* 22. 기존에 작성됐던 TodoContext.Provider를 21에서 새롭게 생성한 Provider로 대체 */}
      <TodoStateContext.Provider value={todo}>
        {/* <TodoDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}> */}
        {/* 24. memizedDispatches 함수를 TodoDispatchContext.Provider의 속성으로 대체한다. -> 오류 발생 : 기존에 만들었던 TodoContext를 제거하고 2개의 context로 새로 생성했기 때문 -> context에서 데이터를 받는 자식 컴포넌트 수정 */}
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          {/* <TodoContext.Provider value={{ todo, onCreate, onUpdate, onDelete }}> */}
          {/* 3. value 값에는 전달해야 할 props 들을 객체로 설정하고, 이 값들은 context에 소속된 컴포넌트에 공급된다 -> TodoEditor, TodoList에 작성된 props를 제거한다 -> 오류 메시지 확인(length 문제, TodoList.js) */}
          <TodoEditor />
          <TodoList />
          {/* </TodoContext.Provider> */}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
