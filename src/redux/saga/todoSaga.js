import { takeEvery, put } from 'redux-saga/effects';
import { GET_TODO_DATA, SET_TODO_DATA } from '../constants';

function* getTodos() {
  const data = {
    isLoading: true,
    data: []
  };
  yield put({ type: SET_TODO_DATA, data });
  const res = yield fetch('https://jsonplaceholder.typicode.com/todos/');
  const resData = yield res.json();
  const newData = {
    isLoading: false,
    data: resData
  };
  yield put({ type: SET_TODO_DATA, data: newData });
}

function* todoSaga() {
  yield takeEvery(GET_TODO_DATA, getTodos);
}

export default todoSaga;
