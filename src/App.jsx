import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  function timerStop() {
    clearInterval(interval.current);
    console.log(interval.current);
  }

  return (
    <>
    <Counter/>
    <div>

     
      
      <div>
        <button onClick={timerStop}>stop</button>
      </div>
      <div>
        <button>reset</button>
      </div>
    </div>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  let interval = useRef(0);
  // console.log(interval.current);

  
  function timerStarting() {
     interval.current = setInterval(() => {
      setCount(count => count + 1);
      // console.log(count)
    }, 1000);
    console.log( "inside start" ,interval.current);
  }

  return (
    <div>
        <h1> {count}</h1>
        <div>
          <button onClick={timerStarting} >start</button>
        </div>
    </div>
  )
      
}

export default App
