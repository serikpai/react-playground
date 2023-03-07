import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = [];

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: initialStateValue,
    isOpen: false
  },
  reducers: {
    initializeTasks: (state, {payload}) => {

      state.value = payload;
    },
    addNewTask: (state, action) => {
      const newTask = action.payload;
      state.value = [newTask, ...state.value];
    },
    deleteTask: (state, action) => {
      const id = action.payload;

      state.value = state.value
        .filter(x => x.id !== id);
    },
    togglePriority: (state, action) => {
      const id = action.payload;

      state.value = state.value
        .map(task => task.id === id ? {...task, important: !task.important} : task);
    },
    toggleUpsertForm: (state) => {
      state.isOpen = !state.isOpen;
    }
  }
});

const action = taskSlice.actions;
export const {addNewTask, deleteTask, toggleUpsertForm} = taskSlice.actions;

export const getAllTasks = () => async (dispatch) => {

  const response = await fetch(`http://localhost:3002/tasks/`);

  if (response.ok) {
    const data = await response.json();
    dispatch(action.initializeTasks(data));
  }
};

export const togglePriority = ({id}) => async (dispatch, getState) => {

  const items = getState().task.value;
  const task = items.find(x => x.id === id);
  const updTask = {...task,important: !task.important};

  const response = await fetch(`http://localhost:3002/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updTask)
  });

  if (response.ok) {
    const data = items.map(x => x.id === id ? updTask : x);
    dispatch(action.initializeTasks(data));
  }
};

export const selectAllTodos = x => x.task.value;


export default taskSlice.reducer;