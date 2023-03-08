import {createAsyncThunk} from '@reduxjs/toolkit';

const API_ENDPOINT = 'http://localhost:3002';

export const fetchAllTasks = createAsyncThunk('task/fetchAll', async () => {
  const response = await fetch(`${API_ENDPOINT}/tasks/`);

  const data = await response.json() ?? [];
  return data.reverse();
});

export const fetchTaskById = createAsyncThunk('task/fetchById', async (id) => {
  const response = await fetch(`${API_ENDPOINT}/tasks/${id}`);

  return await response.json() ?? {};
});

export const addNewTask = createAsyncThunk('task/create', async (task) => {
  const response = await fetch(`${API_ENDPOINT}/tasks/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(task)
  });

  return await response.json() ?? {};
});

export const deleteTask = createAsyncThunk('task/delete', async (task) => {
  const {id} = task;
  await fetch(`${API_ENDPOINT}/tasks/${id}`, {
    method: 'DELETE'
  });

  return task;
});

export const togglePriority = createAsyncThunk('task/togglePriority', async ({id}, {getState}) => {
  const items = getState()?.task.allTasks;
  const task = items.find(x => x.id === id);
  const updTask = {...task, important: !task.important};

  const response = await fetch(`${API_ENDPOINT}/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  });

  return await response.json() ?? {};
});
