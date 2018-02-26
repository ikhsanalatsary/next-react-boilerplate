export default function createReducer(initialState, actions) {
  return (state = initialState, action) => {
    if (typeof actions[action.type] !== 'function') {
      return state;
    }
    return actions[action.type](state, action);
  }
}
