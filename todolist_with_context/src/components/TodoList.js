import React from 'react';
// 8. useContext와 TodoContext를 import 한다.
import { useState, useMemo, useContext } from 'react';
// import { TodoContext } from '../App';
import { TodoStateContext } from '../App';
import TodoItem from './TodoItem';

// 10. TodoList는 더 이상 App에서 props를 받지 않는다. 따라서 context로 전달 받은 데이터를 구조분해 할당하여 받는다. -> TodoItem.js에도 constext 데이터를 전달한다.
const TodoList = () => {
  // 12. onUpdate, onDelete 함수 제거
  // const { todo, onUpdate, onDelete } = useContext(TodoContext);

  // 26. TodoList에서는 todo 값만 사용할 것이므로 TodoStateContext를 지정(TodoStateContext import) -> TodoItem.js
  // const { todo } = useContext(TodoContext);
  const todo = useContext(TodoStateContext);
  // const TodoList = ({ todo, onUpdate, onDelete }) => {
  // 9. useContext를 호출하고 TodoContext를 인수로 전달해 데이터를 storeData에 저장한다.
  // const storeData = useContext(TodoContext);
  // console.log(storeData); // 전달 받은 todo, onUpdate, onDelete props 표시

  const [search, setSearch] = useState('');
  const analyzeTodo = useMemo(() => {
    console.log('analyze 함수 호출');
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ''
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className='TodoList'>
      <h4>Todo List</h4>
      <input
        type='text'
        className='search_bar'
        placeholder='검색어를 입력하세요.'
        onChange={onChangeSearch}
      />
      <div className='list_wrapper'>
        {getSearchResult().map((item) => {
          // 13. props 속성 제거 -> TodoItem.js
          return <TodoItem {...item} key={item.id} />;
        })}
      </div>

      <div>Total : {totalCount}</div>
      <div>Complete : {doneCount}</div>
      <div>Not Done : {notDoneCount}</div>
    </div>
  );
};

// 4. todo 값의 기본 전달 값(props)을 빈 배열로 하면 오류는 해결된다.
// 5. 리액트 개발자 도구에서 Context.Provider를 탭하면 오른쪽에 todo 값이 들어오는 것을 확인 할 수 있다.
// 6. App.js에서 만들었던 TodoContext를 외부 파일에서 사용하기 위해서는 이를 export 해야 한다. -> App.js
TodoList.defaultProps = {
  todo: [],
};

export default TodoList;
