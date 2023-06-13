import { useState } from 'react'
import './App.css'
import GamePlay from './components/GamePlay'
import StartPlay from './components/StartPlay'
function App() {

  const [isGamePlay , setIsGamePlay] = useState(false);

  const toggleGamePlay = ()=>{
    setIsGamePlay((prev)=>{return !prev});
  }

  return (
    <>

    {isGamePlay ? <GamePlay/> : <StartPlay toggle={toggleGamePlay}/>}

    </>
  )
}



export default App
