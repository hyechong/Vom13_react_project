import React from 'react';
import { useState, useRef } from 'react';

const TodoEditor = ({ onCreate }) => {
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
