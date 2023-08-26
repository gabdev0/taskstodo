import './TaskCard.css';

function TaskCard(){
    return(
        <div className='taskcard-content'>
            <div className='taskcard-status'>V</div>
            <div className='taskcard-info'>read the book for tomorrow</div>
            <div className='taskcard-delete'>X</div>
        </div>
    );
}

export { TaskCard }