import {createSlice} from '@reduxjs/toolkit';
import {addNewTask, deleteTask, fetchAllTasks, fetchTaskById, togglePriority} from './tasks.thunk';

export * from './tasks.thunk';

export const tasks = createSlice({
  name: 'task',
  initialState: {
    allTasks: [],
    current: {},
    isOpen: false,
    isLoading: false
  },
  reducers: {
    toggleUpsertForm: (state) => ({
      ...state,
      isOpen: !state.isOpen
    })
  },
  extraReducers: {
    [fetchAllTasks.pending]: (state) => ({
      ...state,
      isLoading: true
    }),
    [fetchAllTasks.fulfilled]: (state, {payload: tasks}) => ({
      ...state,
      allTasks: tasks,
      isLoading: false
    }),
    [fetchTaskById.pending]: (state) => ({
      ...state,
      isLoading: true
    }),
    [fetchTaskById.fulfilled]: (state, {payload: task}) => ({
      ...state,
      isLoading: false,
      current: task
    }),
    [togglePriority.fulfilled]: (state, {payload: updTask}) => ({
      ...state,
      allTasks: state?.allTasks
        .map(task => task.id === updTask.id ? updTask : task)
    }),
    [addNewTask.fulfilled]: (state, {payload: newTask}) => ({
      ...state,
      allTasks: [newTask, ...state?.allTasks]
    }),
    [deleteTask.fulfilled]: (state, {payload: task}) => ({
      ...state,
      allTasks: state?.allTasks.filter(x => x.id !== task.id)
    })
  }
});

export const {toggleUpsertForm} = tasks.actions;

export const selectAllTodos = x => x.task?.allTasks ?? [];
export const selectIsOpen = x => x.task?.isOpen ?? false;
export const selectIsLoading = x => x.task.isLoading ?? false;
export const selectOneTask = x => x.task.current ?? {};

export default tasks.reducer;