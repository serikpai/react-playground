import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

export function TaskPage() {

    const {id} = useParams();
    const tasks = useSelector(x => x.task.value);
    const task = tasks.find(t => t.id === +id);

    return (
        <>
            <h1>Task: {task.name}</h1>
        </>
    );
}

TaskPage.defaultProps = {};

TaskPage.propTypes = {};