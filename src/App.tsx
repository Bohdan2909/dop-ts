import React, { useState} from 'react';
import './App.css';
import Button from './components/Button';

type AppType = {
    id: number
    title: string
    completed: boolean
}

function App() {
    const [users, setUsers] = useState<AppType[]>([])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.json())
    //         .then(json => setUsers(json.data))
    // }, [])

    const showUp = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setUsers(json))
    }
    const del = () => {
        setUsers([])
    }
    return (
        <div className="App">
            <Button name={'Show me'} callback={showUp}/>
            <Button name={'Delete'} callback={del}/>
            <ul>
                {users.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{`${el.completed}`}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
