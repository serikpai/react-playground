export function TaskItem({task}) {

    let cssClasses = 'task-item';
    if (task.important) {
        cssClasses += ' important';
    }

    return (
        <div className={cssClasses}>
            <p className={'tsk-name'}>{task.name}</p>
            <p className={'tsk-due-time'}>{task.dueTime}</p>
        </div>
    );
}