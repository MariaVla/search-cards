import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const initialStateSearch = {
  searchField: '',
};

export const searchCards = (state = initialStateSearch, action = {}) => {
  if (action.type === CHANGE_SEARCH_FIELD) {
    return { ...state, searchField: action.payload };
    // return Object.assign({}, state, { searchField: action.payload });
  } else {
    return state;
  }
};

const initialStateCards = {
  cards: [],
  isPending: true,
};

export const requestCards = (state = initialStateCards, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        cards: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
