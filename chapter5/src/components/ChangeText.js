import React from 'react';
import { useState } from 'react';

const ChangeText = () => {
  const [text, setText] = useState('');
  const changeInput = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <h2>ChangeText</h2>
      <input type='text' onChange={changeInput} />
      <p>{text}</p>
    </div>
  );
};

export default ChangeText;
