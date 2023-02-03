import {useState} from 'react';
import {UpsertTaskForm} from './UpsertTaskForm';
import {AllTasks} from './AllTasks';
import {QueueTitle} from './QueueTitle';

export const TaskList = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        name: 'first one',
        dueTime: 'monday',
        important: false
    }, {
        id: 2,
        name: 'second one',
        dueTime: 'friday',
        important: true
    }]);
    const [isFormVisible, setFormVisible] = useState(false);

    const addNewTask = (task) => {
        setTasks([task, ...tasks]);
        setFormVisible(false);
    };

    const showUpsertForm = () => {
        setFormVisible(!isFormVisible);
    };

    const deleteItem = (id) => {
        setTasks(tasks
            .filter(x => x.id !== id));
    };

    const changePriority = (id) => {
        const newTasks = tasks
            .map(t => t.id === id ? {...t, important: !t.important} : t);

        setTasks(newTasks);
    };

    return (
        <>
            <QueueTitle onShowUpsertForm={showUpsertForm}></QueueTitle>
            <UpsertTaskForm isVisible={isFormVisible} onSaveButtonClicked={addNewTask}></UpsertTaskForm>
            <AllTasks tasks={tasks} onDeleteItemClick={deleteItem} onDoubleClick={changePriority}></AllTasks>
        </>
    );
};

