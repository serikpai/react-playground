import {UpsertTaskForm} from './UpsertTaskForm';
import {AllTasks} from './AllTasks';
import {QueueTitle} from './QueueTitle';
import {fetchAllTasks} from '../../features/tasks';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

export const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, []);

  return (
    <>
      <QueueTitle/>
      <UpsertTaskForm/>
      <AllTasks/>
    </>
  );
};

