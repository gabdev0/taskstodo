import React from 'react';
import { Search   } from '../Search/Search';
import { TaskList } from '../TaskList/TaskList';
import './Main.css';

function Main({ data, save }){
    const [searchValue, setSearchValue] = React.useState('');
    const [tasks, setTask] = React.useState(data);

    const completedTasks = tasks ? tasks.filter( t => !!t.completed).length : '0';
    const totalTasks = tasks ? tasks.length : '0';
    const searchedTasks = tasks ? tasks.filter(
        t => t.text.toLowerCase().includes(searchValue.toLowerCase())
    ) : '';

    return(
        <main className='main-app'>
            <div className='main-content'>                
                <div className='title-content'><h1 className='title-app'>TODO APP</h1></div>
                <div className=''><p>total = {totalTasks}</p></div>
                <div className=''><p>completados = {completedTasks}</p></div>
                <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <TaskList
                    data={searchedTasks}
                    update={setTask}
                    save={save}
                />
            </div>
        </main>
    );
}

export { Main }