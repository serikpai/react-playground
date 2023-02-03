export const TaskItem = ({task, onDeleteItemClick, onDoubleClick}) => {

    let cssClasses = 'task-item';
    if (task.important) {
        cssClasses += ' important';
    }

    return (
        <div className={cssClasses} onDoubleClick={() => onDoubleClick(task.id)}>
            <p className={'tsk-name'}>{task.name}</p>
            <i onClick={() => onDeleteItemClick(task.id)}>x</i>
            <p className={'tsk-due-time'}>{task.dueTime}</p>
        </div>
    );
};