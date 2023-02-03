import {useState} from 'react';

export const UpsertTaskForm = ({onSaveButtonClicked}) => {
    const [name, setName] = useState('');
    const [dueTime, setDueTime] = useState('');

    const save = (e) => {
        e.preventDefault();

        if (name) {

            const id = new Date().getMilliseconds();

            onSaveButtonClicked({
                id, name, dueTime, important: false
            });

            setName('');
            setDueTime('');
        }
    };

    const changeName = (e) => {
        setName(e.target.value);
    };
    const changeDueTime = (e) => {
        setDueTime(e.target.value);
    };

    return (
        <form className={'form-tasks'} onSubmit={save}>

            <input type="text" value={name} placeholder={'Name'} onChange={changeName}/>
            <input type="text" value={dueTime} placeholder={'Due date'} onChange={changeDueTime}/>
            <input type="submit" value="Save"/>

        </form>
    );
};