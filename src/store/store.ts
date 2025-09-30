import { configureStore } from '@reduxjs/toolkit';
import { COMMON_KEY, TODOS_KEY } from '@/store/store-keys';
import commonReducer from '../store/common/reducers';
import todosReducer from '../store/todos/reducers';

export const store = configureStore({
  reducer: {
    [COMMON_KEY]: commonReducer,
    [TODOS_KEY]: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
