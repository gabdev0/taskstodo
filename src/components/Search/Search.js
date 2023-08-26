import './Search.css';

function Search(){
    return(
        <div className='search-content'>
            <form>
                <label htmlFor='search'><a>X</a></label>
                <input id='search' placeholder='Search...'></input>
            </form>
        </div>
    );
}

export { Search }