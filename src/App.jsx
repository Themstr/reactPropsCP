import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './Profile/Profile'

function App() {
  const [count, setCount] = useState(0)
  let name = 'Mamino'
  let bio = 'kid'
  let profession = 'da3in 3lih bchar'
  return (
    <div className="App">
      
      <div >
        <a href="#" target="_blank" style={{color: 'red'}}>
          <Profile name={name} bio={bio} profession={profession}/>
        </a>
      </div>
    </div>
  )
}

export default App
