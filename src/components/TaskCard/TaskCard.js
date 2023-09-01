import './TaskCard.css';

function TaskCard(props){
    const { text, completed, onComplete, onDelete } = props;
    const styleStatus = completed ? 'taskcard-status--complete' : ''
    const styleText = completed ? 'taskcard-info--complete' : ''


    return(
        <li className='taskcard-content'>
            <div className={styleStatus}>
                <span
                    onClick={() => onComplete(text)} 
                >V</span>
            </div>
            <div className={`taskcard-info ${ styleText }`}>{text}</div>
            <div >
                <span
                    onClick={() => onDelete(text)} 
                    className='taskcard-delete'
                >X</span>
            </div>      
        </li>
    );
}

export { TaskCard }