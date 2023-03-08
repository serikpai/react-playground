import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTaskById, selectIsLoading, selectOneTask} from '../../features/tasks';

export function TaskPage() {

  const {id} = useParams();
  const task = useSelector(selectOneTask);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTaskById(id));
  }, []);

  let userMessage = '';

  if (isLoading) {
    userMessage = 'Loading...';
  }
  return userMessage ? userMessage : (
    <>
      <h1>Task: {task.name}</h1>
      <p>{task.dueTime}</p>
    </>
  );
}