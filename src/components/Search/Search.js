import './Search.css';

function Search({searchValue, setSearchValue}){
    return(
        <div className='search-content'>
            <form>
                <label htmlFor='search'><a>X</a></label>
                <input 
                    id='search' 
                    placeholder='Search...'
                    value={searchValue}
                    onChange={ (event) => {                        
                        setSearchValue(event.target.value)
                    }}
                ></input>
            </form>
        </div>
    );
}

export { Search }