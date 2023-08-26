import { Search   } from '../Search/Search';
import { TaskList } from '../TaskList/TaskList';
import './Main.css';

function Main(){
    return(
        <main className='main-app'>
            <div className='main-content'>                
                <div className='title-content'><h1 className='title-app'>TODO APP</h1></div>
                <Search></Search>            
                <TaskList></TaskList>
            </div>
        </main>
    );
}

export { Main }