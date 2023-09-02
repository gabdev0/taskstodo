import { SearchIcon } from '../SearchIcon/SearchIcon';
import './Search.css';

function Search({searchValue, setSearchValue}){
    return(
        <div className='search-content'>
            <form>
                <label htmlFor='search'>
                    <SearchIcon/>
                </label>
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