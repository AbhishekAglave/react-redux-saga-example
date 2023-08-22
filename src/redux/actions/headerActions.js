import { SET_TITLE, SHOW_BACK_BTN } from '../constants';

export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    data: title
  };
};
export const setShowBackBtn = (show) => {
  return {
    type: SHOW_BACK_BTN,
    data: show
  };
};
