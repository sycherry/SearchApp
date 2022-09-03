import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/Index';

export default function configureStoreWrap() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: {warnAfter: 300},
        serializableCheck: {warnAfter: 300},
      }),
  });

  return store;
}
