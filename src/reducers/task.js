import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = [{
    id: 1,
    name: 'first one',
    dueTime: 'monday',
    important: false
}, {
    id: 2,
    name: 'second one',
    dueTime: 'friday',
    important: true
}, {
    id: 3,
    name: 'impl. redux',
    dueTime: 'tuesday',
    important: true
}];

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        value: initialStateValue,
        isOpen: false
    },
    reducers: {
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
        },
        // getTask: (state, action) => {
        //     return "tasks"
        // }
    }
});

export const {addNewTask, deleteTask, togglePriority, toggleUpsertForm, getTask} = taskSlice.actions;
export default taskSlice.reducer;