import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './features/counter/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <Counter />
    </div>
  )
}

export default App;
