import {AddNewTaskButton} from './AddNewTaskButton';
import {useDispatch} from 'react-redux';
import {toggleUpsertForm} from '../../reducers/task';

export const QueueTitle = () => {
    const dispatch = useDispatch();

    const onShowUpsertForm=()=>{
        dispatch(toggleUpsertForm())
    }

    return (
        <header>
            <h1>Job Queue</h1>
            <AddNewTaskButton onClick={onShowUpsertForm}></AddNewTaskButton>
        </header>
    );
};