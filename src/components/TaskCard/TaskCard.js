import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon   } from '../DeleteIcon/DeleteIcon';
import './TaskCard.css';

function TaskCard(props){
    const { text, completed, onComplete, onDelete } = props;
    const styleStatus = completed ? 'taskcard-status--complete' : ''
    const styleText = completed ? 'taskcard-info--complete' : ''


    return(
        <li className='taskcard-content'>
            <CompleteIcon
                completed={props.completed}
                onClick={() => onComplete(text)}
            />
            <div className={`taskcard-info ${ styleText }`}>{text}</div>
            <DeleteIcon 
                completed={props.completed}
                onClick={() => onDelete(text)}
            />
        </li>
    );
}

export { TaskCard }