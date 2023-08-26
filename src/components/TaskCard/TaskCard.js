import './TaskCard.css';

function TaskCard(props){
    const styleStatus = props.completed ? 'taskcard-status taskcard-status--complete' : 'taskcard-status'

    return(
        <li className='taskcard-content'>
            <div className={styleStatus}>V</div>
            <div className='taskcard-info'>{props.text}</div>
            <div className='taskcard-delete'>X</div>
        </li>
    );
}

export { TaskCard }