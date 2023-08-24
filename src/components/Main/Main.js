import { Search } from '../Search/Search';
import './Main.css';

function Main(){
    return(
        <main className='main-app'>
            <div className='main-content'>                
                <div><h1 className='title-app'>TODO APP</h1></div>
                <Search></Search>            
            </div>
        </main>
    );
}

export { Main }