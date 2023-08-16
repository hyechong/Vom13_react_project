import React from 'react';
import { useState, useMemo } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  // m1. 할일 분석 기능 함수 정의
  // const analyzeTodo = () => {

  // m7. useMemo 기능 변경
  const analyzeTodo = useMemo(() => {
    // m3. todo에 저장된 아이템의 개수가 많아지면 성능 저하를 일으킬 수 있다.
    // m4. 불필요한 호출 확인을 위해 analyzeTodo를 호출할 때매다 콘솔을 출력한다. 특히 검색어를 입력하게 되면 매 글자마다 함수 호출이 이뤄진다.
    // m5. 이때 useMemo를 사용하면 특정 함수를 호출했을 때 그 함수의 반환값을 기억한다. 그리고 같은 함수를 다시 호출하면 저장된 값을 반환한다.
    // m6. const value = useMemo(callback, deps) : deps의 값일 바뀌면 콜백 함수를 다시 실행하고 결과값을 반환한다.
    // 의존성 배열 값이 변하지 않는 한 함수는 다시 호출되지 않는다.
    console.log('analyze 함수 호출');
    const totalCount = todo.length;
    const doneCount = todo.filter((item) => item.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todo]);

  // m8. analyzeTodo는 함수가 아니기 때문에 ()를 제거한다.
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
          return (
            <TodoItem
              {...item}
              key={item.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>

      {/* m2. 할일 분석 출력 요소 작성 */}
      <div>Total : {totalCount}</div>
      <div>Complete : {doneCount}</div>
      <div>Not Done : {notDoneCount}</div>
    </div>
  );
};

export default TodoList;
