import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
<<<<<<< Updated upstream
import CountVisit from './CountVisit.tsx'
=======
<<<<<<< HEAD
import CLOCK from './Digital_clock.tsx'
=======
import CountVisit from './CountVisit.tsx'
>>>>>>> 1fd04260ada08dbc87225e6f4a7a0f5f94f40fc0
>>>>>>> Stashed changes
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const oldcount = CountVisit(false)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>HE HE Boi</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1);  CountVisit(count)}}>
          count is {count > 0 ? count : oldcount}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <CLOCK/>
      </div>
    </>
  )
}

export default App
