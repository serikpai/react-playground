import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'task',
  initialState: {
    allTasks: [],
    current: {},
    isOpen: false,
    isLoading: false
  },
  reducers: {
    toggleUpsertForm: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTasks.fulfilled, (state, {payload}) => {
        state.allTasks = payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchTaskById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTaskById.fulfilled, (state, {payload: task}) => {
        state.isLoading = false;
        state.current = task;
      });

    builder
      .addCase(togglePriority.fulfilled, (state, {payload: updTask}) => {
        const {id} = updTask;

        state.allTasks = state.allTasks
          .map(task => task.id === id ? updTask : task);
      });

    builder
      .addCase(addNewTask.fulfilled, (state, {payload: newTask}) => {
        state.allTasks = [newTask, ...state.allTasks];
      });

    builder
      .addCase(deleteTask.fulfilled, (state, {payload: task}) => {
        const {id} = task;

        state.allTasks = state.allTasks
          .filter(x => x.id !== id);
      });
  }
});

export const fetchAllTasks = createAsyncThunk(
  'task/fetchAll',
  async () => {
    const response = await fetch('http://localhost:3002/tasks/');

    const data = await response.json() ?? [];
    return data.reverse();
  }
);

export const fetchTaskById = createAsyncThunk(
  'task/fetchById',
  async (id) => {
    const response = await fetch(`http://localhost:3002/tasks/${id}`);

    return await response.json() ?? {};
  }
);

export const addNewTask = createAsyncThunk(
  'task/create',
  async (task) => {
    const response = await fetch('http://localhost:3002/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    return await response.json() ?? {};

  }
);

export const deleteTask = createAsyncThunk(
  'task/delete',
  async (task) => {
    const {id} = task;
    await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'DELETE'
    });

    return task;
  }
);

export const togglePriority = createAsyncThunk(
  'task/togglePriority',
  async ({id}, {getState}) => {
    const items = getState()?.task.allTasks;
    const task = items.find(x => x.id === id);
    const updTask = {...task, important: !task.important};

    const response = await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });

    return await response.json() ?? {};
  }
);

export const {toggleUpsertForm} = tasks.actions;

export const selectAllTodos = x => x.task?.allTasks ?? [];
export const selectIsOpen = x => x.task?.isOpen ?? false;
export const selectIsLoading = x => x.task.isLoading ?? false;
export const selectOneTask = x => x.task.current ?? {};

export default tasks.reducer;