import { createStore } from 'redux';
import { reducer_city }  from './../reducers/city';

const initialState = {
  city: 'Buenos Aires, ar'
};


export const store = createStore(
  reducer_city,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);