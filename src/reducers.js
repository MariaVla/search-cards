const initialState = {
  searchField: '',
};

export const searchCards = (state = initialState, action = {}) => {
  if (action.type === 'CHANGE_SEARCH_FIELD') {
    return { ...state, searchField: action.payload };
    // return Object.assign({}, state, { searchField: action.payload });
  } else {
    return state;
  }
};
