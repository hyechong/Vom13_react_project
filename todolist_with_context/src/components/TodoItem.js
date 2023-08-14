import React from 'react';
// 14. useContext와 지정되었던 TodoContext를 사용하기 위해 import 한다.
import { useContext } from 'react';
// import { TodoContext } from '../App';
import { TodoDispatchContext } from '../App';

// 11. 기존에 TodoItem은 onUpdate와 onDelete 함수를 props로 전달 받았다. -> TodoList.js에서 두 함수 props를 제거한다.
// const TodoItem = ({ id, content, isDone, createDate, onUpdate, onDelete }) => {
// 15. context를 사용하기 위해 위 코드를 변경한다.
const TodoItem = ({ id, content, isDone, createDate }) => {
  // 20. 렌터링 테스트를 위해 id 출력
  console.log(`${id} TodoItem Update`); // 렌더링 할 때마다 컴포넌트 리렌더링 됨. TodoContext.provider 아래의 컴포넌트들도 함께 리렌더링 되는 것이 원인. 401p 참조
  // 따라서 todo가 업데이트 되면 영향을 받는 context : TodoStateContext와 dispatch 함수인 onCreate, onUpdate, onDelete가 변경되면 영향을 받는 TodoDispatchContext를 나눌 필요가 있다. 402p 참조 -> App.js

  // 16. context를 사용하여 onUpdate, onDelete 함수 props를 구조분해 할당 한다. 현재까지 수정과 삭제 기능 확인
  // 17. 다음으로 onCreate props 활성화 -> TodoEditor.js

  // 27. TodoItem에서는 onUpdate와 onDelete 함수, 즉 dispatch 함수만 필요하므로 TodoDispatchContext로 파라미터 변경(import 필요)
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className='TodoItem'>
      <div className='checkbox_col'>
        <input type='checkbox' checked={isDone} onChange={onChangeCheckBox} />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
