import React from 'react';
import { Search   } from '../Search/Search';
import { TaskList } from '../TaskList/TaskList';
import './Main.css';

const defautlTasks = [
    {text: "read the book for tomorrow", completed: false}, 
    {text: "go for a run", completed: true}, 
    {text: "cook", completed: true},
    {text: "eat", completed: false},
    {text: "working", completed: false},
]

function Main(){
    const [searchValue, setSearchValue] = React.useState('');
    const [tasks, setTask] = React.useState(defautlTasks);

    const completedTasks = tasks.filter( t => !!t.completed).length;
    const totalTasks = tasks.length;
    const searchedTasks = tasks.filter(
        t => t.text.toLowerCase().includes(searchValue.toLowerCase())
    );

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
                />
            </div>
        </main>
    );
}

export { Main }