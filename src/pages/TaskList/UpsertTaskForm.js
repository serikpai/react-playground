import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewTask, selectIsOpen, toggleUpsertForm} from '../../features/tasks';

export const UpsertTaskForm = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(selectIsOpen);

  const [name, setName] = useState('');
  const [dueTime, setDueTime] = useState('');

  const save = (e) => {
    e.preventDefault();

    if (name) {

      let time = dueTime;

      if (!dueTime) {

        const now = new Date();
        now.setDate(now.getDate() + 2);
        time = now.toDateString();
      }

      dispatch(addNewTask({
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

  return isVisible && (
    <form className={'form-tasks'} onSubmit={save}>

      <input type="text" value={name} placeholder={'name'} onChange={changeName}/>
      <input type="text" value={dueTime} placeholder={'due time'} onChange={changeDueTime}/>
      <input type="submit" value="Save"/>

    </form>
  );
};