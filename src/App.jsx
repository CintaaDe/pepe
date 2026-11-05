import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <> 
   <button onClick={() => setCount(count + 1)}>boton</button>
   <p> toco el boton {count} {count === 1 ? 'vez' : 'veces'}</p>
   </>
  )
}

export default App
