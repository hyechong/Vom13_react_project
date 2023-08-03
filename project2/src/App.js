import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { useState, useRef } from 'react';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: 'react study',
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '토토 산책',
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: '격리',
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);

  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((item) =>
        item.id === targetId ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((item) => item.id !== targetId));
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
