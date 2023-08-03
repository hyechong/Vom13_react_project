import './TodoList.css';

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');
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
      <h4>Todo List 📌</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className='searchbar'
        placeholder='Search...'
      />
      <div className='list_wrapper'>
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
