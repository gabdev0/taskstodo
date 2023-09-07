import './TaskList.css';
import { TaskCard } from '../TaskCard/TaskCard';

function TaskList({ data, update, save }){
    const tasks = data;

    const completed = (text) => {        
        const copyData = [...data];
        const index = copyData.find( d => d.text === text);
        index.completed=!index.completed
        save();
        update(copyData);
    }

    const remove = (text) => {        
        const copyData = [...data];
        const filter = copyData.filter( d => d.text !== text);
        save();
        update(filter);
    }

    const renderItem = (list) => {
        return list.map( l =>
            l && l.text!==""
            ? <TaskCard
                key={ l.text }
                text={ l.text }
                completed={ l.completed }
                onComplete={ completed }
                onDelete={ remove }
                /> 
            : null )
    }

    return(
        <div className='tasklist-content'>
            <ul className='tasklist-list'>
                {tasks ? renderItem(tasks) : null}
            </ul>
        </div>
    );
}

export { TaskList }