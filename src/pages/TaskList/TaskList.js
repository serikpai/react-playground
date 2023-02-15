import {useState} from 'react';
import {UpsertTaskForm} from './UpsertTaskForm';
import {AllTasks} from './AllTasks';
import {QueueTitle} from './QueueTitle';

export const TaskList = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const showUpsertForm = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <>
            <QueueTitle onShowUpsertForm={showUpsertForm}/>
            <UpsertTaskForm isVisible={isFormVisible}/>
            <AllTasks/>
        </>
    );
};

