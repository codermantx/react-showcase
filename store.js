import { createStore } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,
      [{
        id: action.id,
        task: action.task
      }]]
    case 'TOGGLE':
      return this.state.map(s => (s.id === action.id) ? { ...s, completed: !s.completed } : s);
    default:
      return state;
  }
}

let store = createStore(todos);

export default store;

