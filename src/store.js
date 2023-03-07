import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './tasks/taskSlice';
import {apiSlice} from './api/apiSlice';

export const store = configureStore({
  reducer: {
    task: tasksReducer,
    [apiSlice?.reducerPath]: apiSlice?.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice?.middleware)
});