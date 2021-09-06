import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        const data = await axios.get('/api')
            .then((res) => (setMessage(res.data.msg)))

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={handleClick}>Dis Bonjour!</button>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default App;
