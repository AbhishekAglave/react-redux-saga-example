import { combineReducers } from 'redux';
import headerReducer from './headerReducer';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
  headerReducer,
  todoReducer
});

export default rootReducer;
