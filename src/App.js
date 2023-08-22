import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setShowBackBtn, setTitle } from './redux/actions/headerActions.js';
import { getTodos } from './redux/actions/todoActions';

function App() {
  const dispatch = useDispatch();
  const headerData = useSelector((state) => state.headerReducer);
  const todoData = useSelector((state) => state.todoReducer);
  return (
    <div className="App">
      <h1>
        {headerData.ShowBackBtn && '<-\t\t'}
        {headerData.Title}
      </h1>
      <button
        onClick={(event) => {
          dispatch(setTitle('Home Page'));
          dispatch(setShowBackBtn(false));
        }}
      >
        Home
      </button>
      <button
        onClick={(event) => {
          dispatch(setTitle('Page One'));
          dispatch(setShowBackBtn(true));
        }}
      >
        Page 1
      </button>
      <button
        onClick={(event) => {
          dispatch(setTitle('Page Two'));
          dispatch(setShowBackBtn(true));
        }}
      >
        Page 2
      </button>
      <br />
      <button
        onClick={(event) => {
          dispatch(getTodos());
        }}
      >
        {todoData.isLoading ? 'Loading...' : 'Fetch Todo Data'}
      </button>

      {todoData.data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>
              {item.completed ? <i>{'Completed'}</i> : <i>{'Not Completed'}</i>}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
