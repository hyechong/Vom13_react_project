// 2. reducer 함수 정의
export default function reducer(state, action) {
  // 6. action 객체의 type이 CREATE일 때 새 아이템을 추가 -> 할일 작성 체크
  switch (action.type) {
    case 'CREATE': {
      return [action.newItem, ...state];
    }
    // 8. action 객체의 type이 UPDATE 일 때 상태 변화 코드 작성. state에 저장된 아이템 배열에서 action.targetId와 id를 비교해 일치하는 아이탬을 토글한 새 배열 반환
    case 'UPDATE': {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    // 10. action 객체의 type이 DELETE 일 때 상태 변화 코드 작성
    case 'DELETE': {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
}
