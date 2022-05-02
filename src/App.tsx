import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <p>Счетчик: {count}</p>
        <button onClick={()=>setCount(count+1)}>Увеличить счетчик</button>
        <button onClick={()=>setCount(count-1)} >Уменьшить счетчик</button>
        <button onClick={()=>setCount(0)}>Сбросить</button>

    </div>
  );
}

export default App;
