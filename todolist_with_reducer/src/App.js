import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
// import { useState, useRef } from 'react';
import { useReducer, useRef } from 'react';
import reducer from './reducer/reducer';

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

// 11. reducer 함수 분리 후 별도 파일로 저장 후 import -> reducer > reducer.js
// // 2. reducer 함수 정의
// function reducer(state, action) {
//   // 6. action 객체의 type이 CREATE일 때 새 아이템을 추가 -> 할일 작성 체크
//   switch (action.type) {
//     case 'CREATE': {
//       return [action.newItem, ...state];
//     }
//     // 8. action 객체의 type이 UPDATE 일 때 상태 변화 코드 작성. state에 저장된 아이템 배열에서 action.targetId와 id를 비교해 일치하는 아이탬을 토글한 새 배열 반환
//     case 'UPDATE': {
//       return state.map((item) =>
//         item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
//       );
//     }
//     // 10. action 객체의 type이 DELETE 일 때 상태 변화 코드 작성
//     case 'DELETE': {
//       return state.filter((item) => item.id !== action.targetId);
//     }
//     default:
//       return state;
//   }
// }

function App() {
  // 1. useState 삭제
  // const [todo, setTodo] = useState(mockTodo);

  // 3. useReducer 작성
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  // 4. create, update, delete 함수 제거 및 재 정의
  // const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,
  //     isDone: false,
  //     content,
  //     createDate: new Date().getTime(),
  //   };
  //   setTodo([newItem, ...todo]);
  //   idRef.current += 1;
  // };

  // const onUpdate = (targetId) => {
  //   setTodo(
  //     todo.map((item) =>
  //       item.id === targetId ? { ...item, isDone: !item.isDone } : item
  //     )
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((item) => item.id !== targetId));
  // };

  const onCreate = (content) => {
    // 5. dispatch 함수 호출 후 인수로 할 일 정보를 담은 action 객체 전달
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

  const onUpdate = (targetId) => {
    // 7. update dispatch 코드 작성
    dispatch({
      type: 'UPDATE',
      targetId,
    });
  };

  const onDelete = (targetId) => {
    // 9. delete dispatch 코드 작성
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };

  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
