import { configureStore } from '@reduxjs/toolkit';
import common from '../store/common/reducers';
import todos from '../store/todos/reducers';

export const store = configureStore({
  reducer: {
    common,
    todos,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
