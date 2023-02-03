import {useState} from 'react';

export const UpsertTaskForm = ({isVisible, onSaveButtonClicked}) => {
    const [name, setName] = useState('');
    const [dueTime, setDueTime] = useState('');

    if (!isVisible) {
        return '';
    }

    const save = (e) => {
        e.preventDefault();

        if (name) {

            const id = new Date().getMilliseconds();
            let time = dueTime;

            if (!dueTime) {

                const now = new Date();
                now.setDate(now.getDate() + 2);
                time = now.toDateString();
            }

            onSaveButtonClicked({
                id,
                name,
                dueTime: time,
                important: false
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

            <input type="text" value={name} placeholder={'name'} onChange={changeName}/>
            <input type="text" value={dueTime} placeholder={'due time'} onChange={changeDueTime}/>
            <input type="submit" value="Save"/>

        </form>
    );
};