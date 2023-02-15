import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTask, toggleUpsertForm} from '../../reducers/task';

export const UpsertTaskForm = () => {
    const dispatch = useDispatch();
    const isVisible = useSelector(x => x.task.isOpen);

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

            dispatch(addNewTask({
                id,
                name,
                dueTime: time,
                important: false
            }));

            setName('');
            setDueTime('');

            dispatch(toggleUpsertForm());
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