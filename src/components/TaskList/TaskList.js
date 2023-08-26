import './TaskList.css';
import { TaskCard } from '../TaskCard/TaskCard';

function TaskList(){
    const list = [{text: "read the book for tomorrow", state: false}, {text: "go for a run", state: false}, {text: "cook", state: true}]

    return(
        <div className='tasklist-content'>
            <ul className='tasklist-list'>         
                {list.map( l => 
                    l && l.text!=="" 
                    ? <TaskCard 
                        text={ l.text } 
                        completed={ l.state }
                        /> 
                    : null )}
            </ul>
        </div>
    );
}

export { TaskList }