import React from 'react';
// 18. useContext와 지정되었던 TodoContext를 사용하기 위해 import 한다.
import { useState, useRef, useContext } from 'react';
// import { TodoContext } from '../App';
import { TodoDispatchContext } from '../App';

// 19. context 사용을 위해 onCreate props에 context 적용 및 props 파라미터 삭제 -> TodoItem.js에서 테스트
// const TodoEditor = ({ onCreate }) => {
const TodoEditor = () => {
  // 25. TodoEditor에서는 dispatch 함수를 생성하지 않아도 된다. 따라서 useMemo를 사용해 dispatch 함수를 묶은 객체를 App 컴포넌트리 리렌더 되어도 다시 생성하지 않도록 한다.(import TodoDispatchContext) -> TodoList.js
  // const { onCreate } = useContext(TodoContext);
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState('');
  const inputRef = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className='TodoEditor'>
      <h4>새로운 할일 작성하기 🖊️</h4>
      <div className='editor_wrapper'>
        <input
          type='text'
          placeholder='새로운 할일...'
          value={content}
          onChange={onChangeContent}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
