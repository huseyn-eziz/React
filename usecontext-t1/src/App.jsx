import { useContext } from 'react'
import './App.css'
import { contextim } from './Context'



function App() {

  const istifadeetdiyimcontext = useContext(contextim)

  return (
    <div className='ali'>
    {istifadeetdiyimcontext.username}
    </div>
  )
}

export default App
