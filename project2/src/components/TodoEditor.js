import './TodoEditor.css';
import { useRef, useState } from 'react';

import React from 'react';

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      alert('Please input content!');
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className='TodoEditor'>
      <h4>New To do 📝</h4>
      <div className='editor_wrapper'>
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder='Write new Todo...'
        />
        <button onClick={onSubmit}>add</button>
      </div>
    </div>
  );
};

export default TodoEditor;
