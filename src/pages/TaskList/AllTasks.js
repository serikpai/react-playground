import {TaskItem} from '../../components/TaskItem/TaskItem';
import {useSelector} from 'react-redux';
import {selectAllTodos, selectIsLoading} from '../../features/tasks';

export const AllTasks = () => {
  const tasks = useSelector(selectAllTodos);
  const isLoading = useSelector(selectIsLoading);

  let userMessage = '';

  if (isLoading) {
    userMessage = 'Loading ...';
  } else if (tasks?.length === 0) {
    userMessage = 'everything is done!';
  }

  return (
    <div className={'task-list'}>
      {userMessage ? userMessage : tasks.map(t =>
        <TaskItem key={t.id} task={t}/>
      )}
    </div>
  );
};
