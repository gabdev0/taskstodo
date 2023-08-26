import './TaskList.css';
import { TaskCard } from '../TaskCard/TaskCard';

function TaskList(){
    return(
        <div className='tasklist-content'>
            <div className='tasklist-list'>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
        </div>
    );
}

export { TaskList }