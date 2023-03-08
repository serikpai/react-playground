import {TaskItem} from '../../components/TaskItem/TaskItem';
import {useSelector} from 'react-redux';
import {selectAllTodos, selectIsLoading} from '../../features/tasks';

export const AllTasks = () => {
  const tasks = useSelector(selectAllTodos);
  const isLoading = useSelector(selectIsLoading)

  if (isLoading) {
    return (
      <div className={'task-list'}>
        Loading...
      </div>
    )
  }
  else if (tasks?.length === 0) {
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