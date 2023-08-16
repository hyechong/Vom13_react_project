import React from 'react';

// rm4. 정작 리렌더를 방지해야 하는 요소를 아이템 입력이다. 입력되는 아이템에 따라 자주 리렌더 되기 때문이다.
const TodoItem = ({ id, content, isDone, createDate, onUpdate, onDelete }) => {
  // rm5. 불필요한 렌더링 발생을 알아보기 위해 랜더링 할 때마다 id를 포함하는 문자열을 출력
  console.log(`${id} TodoItem update`); // 아이템 추가시 기존 요소가 출력되고 추가된 아이템이 함께 출력
  // 현재 리렌더 될 필요가 있는 경우는 완료/미완료 체크 시 바뀌는 boolean 값이다.
  // 또한 아이템 제거, 체크박스 클릭, 검색 폼 입력 시에도 TodoItem은 리렌더 된다.
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

// export default TodoItem;
// rm6. 리렌더 방지를 위해 TodoItem 역시 React.memo에 감싼다.
// 감싸도 역시 리렌더 된다. 이유는 아이템 추가 시 todo가 업데이트 되어 App 컴포넌트가 리렌더 됐기 때문이다.
// 따라서 props도 별경 되어 리렌더 됐다.
// App.js에서 작성된 onUpdate와 같은 함수 props들은 모두 다시 생성되어 전달 된다.
// const funcA = () => {console.log("hi")}
// const funcB = () => {console.log("hi")}

// 위 두 함수는 동일한 기능을 수행하지만 서로 다른 참조값을 갖는다. 따라서 React.memo는 props가 변한 것으로 판단한다.
// 이러한 문제를 해결하기 위해 useCallBack을 사용한다. -> useCallBack.js
export default React.memo(TodoItem);
