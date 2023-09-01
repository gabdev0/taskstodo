import './TaskList.css';
import { TaskCard } from '../TaskCard/TaskCard';

function TaskList({ data, update }){
    const tasks = data;

    const completed = (text) => {        
        const copyData = [...data];
        const index = copyData.find( d => d.text === text);
        index.completed=!index.completed
        update(copyData);
    }

    const remove = (text) => {        
        const copyData = [...data];
        const filter = copyData.filter( d => d.text !== text);
        update(filter);
    }

    return(
        <div className='tasklist-content'>
            <ul className='tasklist-list'>
                {tasks ? tasks.map( l =>
                    l && l.text!==""
                    ? <TaskCard
                        key={ l.text }
                        text={ l.text }
                        completed={ l.completed }
                        onComplete={ completed }
                        onDelete={ remove }
                        /> 
                    : null ) : null}
            </ul>
        </div>
    );
}

export { TaskList }