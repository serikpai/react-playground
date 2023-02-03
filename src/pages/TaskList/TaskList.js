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

    const addNewTask = (task) => {

        console.log(task);

        setTasks([task, ...tasks]);
    };

    return (
        <>
            <header>
                <h1>Job Queue</h1>
                <AddNewTaskButton onClick={addNewTask}></AddNewTaskButton>
            </header>
            <UpsertTaskForm onSaveButtonClicked={addNewTask}></UpsertTaskForm>
            <AllTasks tasks={tasks}></AllTasks>
        </>
    );
};

export const AllTasks = ({tasks}) => {
    return (
        <div className={'task-list'}>
            {tasks.map(t => {
                return <TaskItem key={t.id} task={t}></TaskItem>;
            })}
        </div>
    )
}