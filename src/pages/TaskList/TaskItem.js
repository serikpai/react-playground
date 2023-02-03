export function TaskItem({task, onDeleteItemClick, onDoubleClick}) {

    let cssClasses = 'task-item';
    if (task.important) {
        cssClasses += ' important';
    }

    const deleteItem = () => {
        onDeleteItemClick(task);
    };

    return (
        <div className={cssClasses}>
            <p className={'tsk-name'}>{task.name}</p>
            <i onClick={deleteItem}>x</i>
            <p className={'tsk-due-time'}>{task.dueTime}</p>
        </div>
    );
}