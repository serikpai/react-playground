import {TaskItem} from '../../components/TaskItem/TaskItem';

export const AllTasks = ({tasks, onDeleteItemClick, onDoubleClick}) => {

    if (tasks.length === 0) {
        return (
            <div className={'task-list'}>
                everything is done!
            </div>
        );
    } else {
        return (
            <div className={'task-list'}>
                {tasks.map(t => {
                    return <TaskItem key={t.id} task={t} onDeleteItemClick={onDeleteItemClick}
                                     onDoubleClick={onDoubleClick}></TaskItem>;
                })}
            </div>
        );
    }
};