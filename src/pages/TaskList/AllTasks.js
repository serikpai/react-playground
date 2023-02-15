import {TaskItem} from '../../components/TaskItem/TaskItem';
import {useSelector} from 'react-redux';

export const AllTasks = () => {
    const tasks = useSelector(x => x.task.value);

    if (tasks.length === 0) {
        return (
            <div className={'task-list'}>
                everything is done!
            </div>
        );
    } else {
        return (
            <div className={'task-list'}>
                {tasks.map(t =>
                    <TaskItem key={t.id} task={t} />
                )}
            </div>
        );
    }
};