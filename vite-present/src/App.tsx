import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Complier from './components/complier/index';

function App() {
    "use memo";
    
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Vite + React</h1>
            <Counter count={count} setCount={setCount} />
            <Complier />
        </>
    )
}

export default App
