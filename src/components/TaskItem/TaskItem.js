import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';

import {deleteTask, togglePriority} from '../../reducers/task';

import css from './TaskItem.module.css';


export const TaskItem = ({task}) => {
    const dispatch = useDispatch();

    let cssClasses = css.card;
    if (task.important) {
        cssClasses = classNames(css.card, css.important);
    }

    const onDeleteItemClick = () => {
        dispatch(deleteTask(task.id));
    };

    const onDoubleClick = () => {
        dispatch(togglePriority(task.id));
    };

    return (
        <div className={cssClasses} onDoubleClick={onDoubleClick}>
            <p className={css.name}>
                <Link to={task.id.toString()}>
                {task.name}
                </Link>
            </p>
            <i className={css.icon} onClick={onDeleteItemClick}>x</i>
            <p className={css.dueTime}>{task.dueTime}</p>
        </div>
    );
};