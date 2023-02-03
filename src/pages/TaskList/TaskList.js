import {TaskItem} from './TaskItem';
import {useState} from 'react';
import {AddNewTaskButton} from './AddNewTaskButton';

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

    const addNewTask = () => {
        const id = new Date().getMilliseconds();

        setTasks([{
            id,
            name: 'third'
        }, ...tasks]);
    };

    return (
        <>
            <header>
                <h1>Job Queue</h1>
                <AddNewTaskButton onClick={addNewTask}></AddNewTaskButton>
            </header>
            {tasks.map(t => {
                return <TaskItem key={t.id} task={t}></TaskItem>;
            })}
        </>
    );
};

