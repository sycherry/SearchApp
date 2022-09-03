import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/Index';

export default function configureStoreWrap() {
  const store = configureStore({reducer: rootReducer});
  return store;
}
