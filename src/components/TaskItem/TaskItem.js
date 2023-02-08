import classNames from 'classnames';

import css from './TaskItem.module.css';

export const TaskItem = ({task, onDeleteItemClick, onDoubleClick}) => {

    let cssClasses = css.taskItem;
    if (task.important) {
        cssClasses = classNames(css.taskItem, css.important);
    }

    return (
        <div className={cssClasses} onDoubleClick={() => onDoubleClick(task.id)}>
            <p className={css.taskName}>{task.name}</p>
            <i onClick={() => onDeleteItemClick(task.id)}>x</i>
            <p className={css.taskDueTime}>{task.dueTime}</p>
        </div>
    );
};