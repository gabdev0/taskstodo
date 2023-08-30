import './TaskCard.css';

function TaskCard(props){
    const { text, completed } = props;
    const styleStatus = completed ? 'taskcard-status taskcard-status--complete' : 'taskcard-status'

    return(
        <li className='taskcard-content'>
            <div className={styleStatus}>V</div>
            <div className='taskcard-info'>{text}</div>
            <div className='taskcard-delete'>X</div>
        </li>
    );
}

export { TaskCard }