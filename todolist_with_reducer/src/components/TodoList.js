import React from 'react';
import { useState } from 'react';
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
    </div>
  );
};

export default TodoList;
