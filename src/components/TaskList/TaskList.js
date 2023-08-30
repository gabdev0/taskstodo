import './TaskList.css';
import { TaskCard } from '../TaskCard/TaskCard';

function TaskList({ data }){
    const tasks = data;

    return(
        <div className='tasklist-content'>
            <ul className='tasklist-list'>    
                {tasks.map( l => 
                    l && l.text!=="" 
                    ? <TaskCard
                        key={ l.text }
                        text={ l.text } 
                        completed={ l.completed }
                        /> 
                    : null )}
            </ul>
        </div>
    );
}

export { TaskList }