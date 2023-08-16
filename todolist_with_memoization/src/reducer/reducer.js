export default function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [action.newItem, ...state];
    }
    case 'UPDATE': {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.targetId);
    }
    default:
      return state;
  }
}
