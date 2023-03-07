import {UpsertTaskForm} from './UpsertTaskForm';
import {AllTasks} from './AllTasks';
import {QueueTitle} from './QueueTitle';

export const TaskList = () => {

  return (
    <>
      <QueueTitle/>
      <UpsertTaskForm/>
      <AllTasks/>
    </>
  );
};

