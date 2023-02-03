import {AddNewTaskButton} from './AddNewTaskButton';

export const QueueTitle = ({onShowUpsertForm}) => {
    return (
        <header>
            <h1>Job Queue</h1>
            <AddNewTaskButton onClick={onShowUpsertForm}></AddNewTaskButton>
        </header>
    );
};