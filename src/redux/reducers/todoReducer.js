import { SET_TODO_DATA } from '../constants';

const initialState = {
  isLoading: false,
  data: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_DATA:
      return action.data;
    default:
      return state;
  }
};

export default todoReducer;
