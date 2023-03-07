import {TaskItem} from '../../components/TaskItem/TaskItem';
import {useDispatch, useSelector} from 'react-redux';
import {getAllTasks, selectAllTodos} from '../../tasks/taskSlice';
import {useEffect} from 'react';

export const AllTasks = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTodos);

  useEffect(() => {
    console.log('call once??');
    dispatch(getAllTasks());
  }, []);

  if (tasks?.length === 0) {
    return (
      <div className={'task-list'}>
        everything is done!
      </div>
    );
  } else {
    return (
      <div className={'task-list'}>
        {tasks.map(t =>
          <TaskItem key={t.id} task={t}/>
        )}
      </div>
    );
  }
};