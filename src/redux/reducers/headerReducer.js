import { SET_TITLE, SHOW_BACK_BTN } from '../constants';

const initialState = {
  Title: 'Home Page',
  ShowBackBtn: false
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, Title: action.data };
    case SHOW_BACK_BTN:
      return { ...state, ShowBackBtn: action.data };
    default:
      return state;
  }
};

export default headerReducer;
