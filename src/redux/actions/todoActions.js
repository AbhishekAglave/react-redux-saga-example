import { GET_TODO_DATA } from '../constants';

export const getTodos = () => {
  return {
    type: GET_TODO_DATA
  };
};
