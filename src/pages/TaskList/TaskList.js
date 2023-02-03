import {useState} from 'react';
import {TaskItem} from './TaskItem';
import {AddNewTaskButton} from './AddNewTaskButton';
import {UpsertTaskForm} from './UpsertTaskForm';

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
    };

    const showUpsertForm = () => {
        setFormVisible(!isFormVisible);
    };

    const deleteItem = (task) => {
        console.log('TaskList.js', task);

        setTasks(tasks
            .filter(x => x.id !== task.id));
    };

    return (
        <>
            <header>
                <h1>Job Queue</h1>
                <AddNewTaskButton onClick={showUpsertForm}></AddNewTaskButton>
            </header>
            <UpsertTaskForm isVisible={isFormVisible} onSaveButtonClicked={addNewTask}></UpsertTaskForm>
            <AllTasks tasks={tasks} onDeleteItemClick={deleteItem}></AllTasks>
        </>
    );
};

export const AllTasks = ({tasks, onDeleteItemClick}) => {
    return (
        <div className={'task-list'}>
            {tasks.map(t => {
                return <TaskItem key={t.id} task={t} onDeleteItemClick={onDeleteItemClick}></TaskItem>;
            })}
        </div>
    );
};