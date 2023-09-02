import React from "react";
import { Header } from "../components/Header/Header";
import { Main   } from '../components/Main/Main';
import { Footer } from "../components/Footer/Footer";

// const defautlTasks = [
//     {text: "read the book for tomorrow", completed: false}, 
//     {text: "go for a run", completed: true}, 
//     {text: "cook", completed: true},
//     {text: "eat", completed: false},
//     {text: "working", completed: false},
// ]

function useLocalStorage(itemName, initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let local;

    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        local = initialValue;
    } else {
        local = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(local);

    const saveItem = (data) => {
        localStorage.setItem(itemName, JSON.stringify(data))
        setItem(data);
    }

    return [item, saveItem]
}

function App(){
    const [tasks, saveTasks] = useLocalStorage('TASKS_V1', []);
    
    return(
        <React.StrictMode>
            <Header/>
            <Main
                data={ tasks }
                save={ () => saveTasks(tasks) }
            />
            <Footer/>
        </React.StrictMode>
    );
}

export { App }