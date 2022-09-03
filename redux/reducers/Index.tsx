import {combineReducers} from 'redux';
import useReducer from './Reducers';

let reducers = combineReducers({
  useReducer: useReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};

export default rootReducer;
